export type Submission = {
  day: number;
  answers: Record<string, string>;
  submittedAt: string;
};

export type Store = {
  submissions: Record<string, Submission>;
};

export const STORAGE_KEY = "ruveer-math-practice-v1";

export const emptyStore = (): Store => ({ submissions: {} });

export function loadStore(): Store {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return emptyStore();
    const parsed = JSON.parse(raw) as Partial<Store>;
    if (!parsed || typeof parsed.submissions !== "object" || parsed.submissions == null) {
      return emptyStore();
    }
    return { submissions: parsed.submissions };
  } catch {
    return emptyStore();
  }
}

export function saveStore(store: Store): boolean {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(store));
    return true;
  } catch {
    return false;
  }
}

export function listSubmissions(store: Store): Submission[] {
  return Object.values(store.submissions).sort((a, b) => a.day - b.day);
}

export type ImportPayload = {
  app?: string;
  student?: string;
  version?: number;
  exportedAt?: string;
  submissions: Submission[];
};

export function parseImport(raw: string): Submission[] | null {
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return null;
  }
  if (!data || typeof data !== "object") return null;
  const submissions = (data as { submissions?: unknown }).submissions;
  if (!Array.isArray(submissions)) return null;
  const out: Submission[] = [];
  for (const item of submissions) {
    if (!item || typeof item !== "object") return null;
    const day = (item as Submission).day;
    const submittedAt = (item as Submission).submittedAt;
    const answers = (item as Submission).answers;
    if (!Number.isInteger(day) || day < 1 || day > 30) return null;
    if (typeof submittedAt !== "string" || Number.isNaN(Date.parse(submittedAt))) return null;
    if (!answers || typeof answers !== "object" || Array.isArray(answers)) return null;
    const clean: Record<string, string> = {};
    for (const [key, value] of Object.entries(answers)) {
      if (typeof value !== "string" || value.length > 500 || key.length > 20) return null;
      clean[key] = value;
    }
    out.push({ day, submittedAt, answers: clean });
  }
  return out;
}

export function mergeSubmissions(store: Store, incoming: Submission[]): Store {
  const submissions = { ...store.submissions };
  for (const item of incoming) {
    const current = submissions[String(item.day)];
    if (!current || Date.parse(item.submittedAt) >= Date.parse(current.submittedAt)) {
      submissions[String(item.day)] = item;
    }
  }
  return { submissions };
}

export function exportPayload(store: Store): ImportPayload {
  return {
    app: "Ruveer's Math Practice",
    student: "Ruveer",
    version: 1,
    exportedAt: new Date().toISOString(),
    submissions: listSubmissions(store),
  };
}
