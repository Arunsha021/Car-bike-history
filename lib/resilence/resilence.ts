export async function fetchWithResilience<T>(
  fn: () => Promise<T>,
  fallback: T
): Promise<T> {
  try {
    return await fn();
  } catch (error) {
    console.error("Upstream API failed:", error);
    return fallback;
  }
}
