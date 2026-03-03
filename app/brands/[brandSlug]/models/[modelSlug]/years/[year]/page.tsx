import { getVehicleAggregatedData } from "@/lib/services/vehicle.services";
import type { Metadata } from "next";

export const revalidate = 60;

type Props = {
  params: {
    brandSlug: string;
    modelSlug: string;
    year: string;
  };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const brand = params.brandSlug.replace("-", " ");
  const model = params.modelSlug.replace("-", " ");

  return {
    title: `${brand} ${model} ${params.year} | Vehicle History`,
    description: `Complete vehicle history, specs, pricing and market insights for ${brand} ${model} ${params.year}.`,
  };
}

export default async function YearPage({ params }: Props) {
  const id = `${params.brandSlug}-${params.modelSlug}-${params.year}`;

  const data = await getVehicleAggregatedData(id);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {params.brandSlug} {params.modelSlug} ({params.year})
      </h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
