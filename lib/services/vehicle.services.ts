import { fetchCarsFromNinjas } from "../api/ninjas.api";
import { fetchWithResilience } from "../resilence/resilence";

export async function getVehicleAggregatedData(id: string) {
  const [make, model, year] = id.split("-");

  const cars = await fetchWithResilience(
    () => fetchCarsFromNinjas(make, model, year),
    []
  );

  const car = cars[0];

  return {
    specs: car
      ? {
          engine: "N/A",
          fuel: car.fuel_type,
          transmission: car.transmission,
        }
      : { engine: "N/A", fuel: "N/A", transmission: "N/A" },

    pricing: {
      price: null,
      currency: "USD",
    },

    history: {
      previousOwners: 0,
    },

    service: {
      lastService: "N/A",
    },

    market: {
      demandIndex: 50,
    },
  };
}
