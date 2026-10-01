import { useEffect, useState } from "react";
import { Home } from "./components/Home";
import { Parent } from "./components/Parent";
import { Practice } from "./components/Practice";
import { getDay } from "./data/days";
import { usePractice } from "./hooks/usePractice";

type Route =
  | { name: "home" }
  | { name: "day"; day: number }
  | { name: "parent" };

function parseRoute(hash: string): Route {
  const path = hash.replace(/^#/, "") || "/";
  if (path === "/parent") return { name: "parent" };
  const match = path.match(/^\/day\/(\d+)$/);
  if (match) {
    const day = Number(match[1]);
    if (day >= 1 && day <= 30) return { name: "day", day };
  }
  return { name: "home" };
}

function useRoute(): Route {
  const [route, setRoute] = useState<Route>(() => parseRoute(window.location.hash));
  useEffect(() => {
    const onChange = () => setRoute(parseRoute(window.location.hash));
    window.addEventListener("hashchange", onChange);
    return () => window.removeEventListener("hashchange", onChange);
  }, []);
  return route;
}

function go(hash: string) {
  window.location.hash = hash;
  window.scrollTo(0, 0);
}

export default function App() {
  const route = useRoute();
  const practice = usePractice();

  if (route.name === "parent") {
    return (
      <Parent
        submissions={practice.submissions}
        onBack={() => go("#/")}
        onClearDay={practice.clearDay}
        onClearAll={practice.clearAll}
        onImport={practice.importDays}
      />
    );
  }

  if (route.name === "day") {
    const day = getDay(route.day);
    if (day) {
      return (
        <Practice
          key={day.day}
          day={day}
          submission={practice.store.submissions[String(day.day)]}
          saveBlocked={practice.saveBlocked}
          onBack={() => go("#/")}
          onSave={practice.saveDay}
        />
      );
    }
  }

  return (
    <Home
      submissions={practice.submissions}
      saveBlocked={practice.saveBlocked}
      onOpenDay={(day) => go(`#/day/${day}`)}
      onOpenParent={() => go("#/parent")}
    />
  );
}
