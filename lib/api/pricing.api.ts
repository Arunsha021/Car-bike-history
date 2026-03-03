export async function getPricing(id: string) {
  await new Promise((res) => setTimeout(res, Math.random() * 800));
  if (Math.random() < 0.2) throw new Error("Pricing API failure");

  return {
    price: 15000,
    currency: "USD",
  };
}
