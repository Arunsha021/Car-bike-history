function delay() {
  return new Promise((res) => setTimeout(res, Math.random() * 800));
}

function maybeFail() {
  if (Math.random() < 0.2) {
    throw new Error("Specs API failure");
  }
}

export async function getSpecs(id: string) {
  await delay();
  maybeFail();

  return {
    engine: "1200cc",
    fuel: "Petrol",
    transmission: "Manual",
  };
}
