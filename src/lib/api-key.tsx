export function getApiKey(): string | null {
  try {
    if (typeof window === "undefined") return null;
    return window.localStorage.getItem("lg:chat:apiKey") ?? process.env.NEXT_PUBLIC_LANGSMITH_API_KEY ?? null;
  } catch {
    // no-op
  }

  return null;
}
