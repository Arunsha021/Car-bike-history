export async function getHistory(id: string) {
  await new Promise((res) => setTimeout(res, Math.random() * 800));
  if (Math.random() < 0.2) throw new Error("History API failure");

  return {
    previousOwners: 2,
  };
}
