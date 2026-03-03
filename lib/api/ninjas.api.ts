const BASE_URL = "https://api.api-ninjas.com/v1/cars";

export type NinjaCar = {
  make: string;
  model: string;
  year: number;
  fuel_type: string;
  transmission: string;
  drive: string;
};

export async function fetchCarsFromNinjas(
  make: string,
  model?: string,
  year?: string
): Promise<NinjaCar[]> {
  const params = new URLSearchParams({
    make,
  });

  if (model) params.append("model", model);
  if (year) params.append("year", year);

  const response = await fetch(`${BASE_URL}?${params.toString()}`, {
    headers: {
      "X-Api-Key": process.env.API_NINJAS_KEY!,
    },
    next: { revalidate: 60 }, // ISR compatible
  });

  if (!response.ok) {
    throw new Error("API Ninjas fetch failed");
  }

  return response.json();
}
