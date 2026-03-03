import { getVehicleAggregatedData } from "@/lib/services/vehicle.services";
import type { Metadata } from "next";

export const revalidate = 60;

type Props = {
  params: { brandSlug: string; modelSlug: string };
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const brand = params.brandSlug.replace("-", " ");
  const model = params.modelSlug.replace("-", " ");

  return {
    title: `${brand} ${model} Specs & History`,
    description: `Explore ${brand} ${model} specifications, pricing, ownership and service records.`,
  };
}

export default async function ModelPage({ params }: Props) {
  const id = `${params.brandSlug}-${params.modelSlug}`;

  const data = await getVehicleAggregatedData(id);

  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 capitalize">
        {params.brandSlug} {params.modelSlug}
      </h1>

      <pre>{JSON.stringify(data, null, 2)}</pre>
    </main>
  );
}
