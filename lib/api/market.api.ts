export async function getMarketAnalytics(id: string) {
  await new Promise((res) => setTimeout(res, Math.random() * 800));
  if (Math.random() < 0.2) throw new Error("Market API failure");

  return {
    demandIndex: 75,
  };
}
