import { useCallback, useEffect, useState } from "react";
import {
  emptyStore,
  listSubmissions,
  loadStore,
  mergeSubmissions,
  saveStore,
  STORAGE_KEY,
  type Store,
  type Submission,
} from "../lib/storage";

export function usePractice() {
  const [store, setStore] = useState<Store>(() => loadStore());
  const [saveBlocked, setSaveBlocked] = useState(false);

  useEffect(() => {
    const onStorage = (event: StorageEvent) => {
      if (event.key === STORAGE_KEY) setStore(loadStore());
    };
    window.addEventListener("storage", onStorage);
    return () => window.removeEventListener("storage", onStorage);
  }, []);

  const commit = useCallback((next: Store) => {
    setStore(next);
    setSaveBlocked(!saveStore(next));
  }, []);

  const saveDay = useCallback(
    (submission: Submission) => {
      commit({
        submissions: {
          ...store.submissions,
          [String(submission.day)]: submission,
        },
      });
    },
    [commit, store.submissions],
  );

  const clearDay = useCallback(
    (day: number) => {
      const submissions = { ...store.submissions };
      delete submissions[String(day)];
      commit({ submissions });
    },
    [commit, store.submissions],
  );

  const clearAll = useCallback(() => {
    commit(emptyStore());
  }, [commit]);

  const importDays = useCallback(
    (incoming: Submission[]) => {
      commit(mergeSubmissions(store, incoming));
    },
    [commit, store],
  );

  return {
    store,
    submissions: listSubmissions(store),
    saveBlocked,
    saveDay,
    clearDay,
    clearAll,
    importDays,
  };
}
