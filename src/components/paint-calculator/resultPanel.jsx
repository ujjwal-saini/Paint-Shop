import {
  PaintBucket,
  Square,
  Shield,
} from "lucide-react";

export default function ResultPanel({
  result,
}) {
  if (!result) {
    return (
      <div className="bg-white rounded-3xl p-6 shadow-sm">

        <h3 className="text-lg font-semibold mb-4">
          Results
        </h3>

        <div className="text-center py-10 text-slate-500">
          Calculate paint to see results
        </div>

      </div>
    );
  }

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h3 className="text-xl font-bold mb-5">
        Paint Estimation
      </h3>

      <div className="space-y-4">

        <div className="flex items-center gap-3 bg-violet-50 rounded-2xl p-4">

          <Square className="text-violet-600" />

          <div>
            <p className="text-sm text-slate-500">
              Total Area
            </p>

            <h4 className="font-bold">
              {result.area} sq.ft
            </h4>
          </div>

        </div>

        <div className="flex items-center gap-3 bg-blue-50 rounded-2xl p-4">

          <PaintBucket className="text-blue-600" />

          <div>
            <p className="text-sm text-slate-500">
              Paint Required
            </p>

            <h4 className="font-bold text-2xl">
              {result.paintRequired} L
            </h4>
          </div>

        </div>

        <div className="flex items-center gap-3 bg-green-50 rounded-2xl p-4">

          <Shield className="text-green-600" />

          <div>
            <p className="text-sm text-slate-500">
              Primer Required
            </p>

            <h4 className="font-bold">
              {result.primerRequired} L
            </h4>
          </div>

        </div>

      </div>
    </div>
  );
}