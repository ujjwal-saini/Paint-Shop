import { GetRecommendedPacks } from "../../utils/calculatorUtils";

export default function RecommendedPacks({
  litres,
}) {
  const packs =
    GetRecommendedPacks(litres);

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h3 className="font-bold text-lg mb-5">
        Recommended Packs
      </h3>

      <div className="grid grid-cols-2 gap-3">

        {packs.map((pack) => (
          <div
            key={pack}
            className="border rounded-2xl p-4 text-center hover:border-violet-500"
          >
            <h4 className="font-bold">
              {pack}
            </h4>
          </div>
        ))}

      </div>

    </div>
  );
}