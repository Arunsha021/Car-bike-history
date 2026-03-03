export async function getServiceRecords(id: string) {
  await new Promise((res) => setTimeout(res, Math.random() * 800));
  if (Math.random() < 0.2) throw new Error("Service API failure");

  return {
    lastService: "2024-05-01",
  };
}
