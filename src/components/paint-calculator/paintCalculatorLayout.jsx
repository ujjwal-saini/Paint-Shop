import { useState } from "react";
import SurfaceSelector from "./surfaceSelector";
import WallCalculator from "./calculators/wallCalculator";
import DoorCalculator from "./calculators/doorCalculator";
import GateCalculator from "./calculators/gateCalculator";
import WindowCalculator from "./calculators/windowCalculator";
import BoundaryCalculator from "./calculators/boundaryCalculator";
import ResultPanel from "./resultPanel";
import RecommendedPacks from "./recommendedPacks";
import { SURFACES } from "../../data/paintData";
import { ArrowLeft } from "lucide-react";

export default function PaintCalculatorLayout() {
  const [activeSurface, setActiveSurface] = useState("");
  const [result, setResult] = useState(null);

  const renderCalculator = () => {
    switch (activeSurface) {
      case "wall":
        return (
          <WallCalculator
            onResult={setResult}
            surfaces={SURFACES}
          />
        );

      case "door":
        return (
          <DoorCalculator
            onResult={setResult}
            surfaces={SURFACES}
          />
        );

      case "gate":
        return (
          <GateCalculator
            onResult={setResult}
            surfaces={SURFACES}
          />
        );

      case "window":
        return (
          <WindowCalculator
            onResult={setResult}
            surfaces={SURFACES}
          />
        );

      case "boundary":
        return (
          <BoundaryCalculator
            surfaces={SURFACES}
            onResult={setResult}
          />
        );

      default:
        return null;
    }
  };

  return (
    <>
      <div className="hidden lg:grid lg:grid-cols-12 gap-6">

        <div className="col-span-3">
          <SurfaceSelector
            active={activeSurface}
            setActive={setActiveSurface}
          />
        </div>

        <div className="col-span-6">
          {activeSurface ? (
            renderCalculator()
          ) : (
            <div className="bg-white  rounded-3xl p-10 h-full flex items-center justify-center border border-gray-300">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-2">
                  Select Paint Surface
                </h3>

                <p className="text-slate-500">
                  Choose Wall, Door, Gate, Window or Boundary Wall
                  to start paint calculation.
                </p>
              </div>
            </div>
          )}
        </div>

        <div className="col-span-3 space-y-5">
          <ResultPanel
            result={result} />
          <RecommendedPacks
            litres={
              result?.paintRequired || 0} />
        </div>
      </div>

      <div className="lg:hidden space-y-5">

        {activeSurface == "" ? (
          <>
            <SurfaceSelector
              active={activeSurface}
              setActive={setActiveSurface}
              surfaces={SURFACES}
            />
          </>) :
          (<>
            <div className="p-2">
              <button onClick={() => setActiveSurface("")}
                className="flex items-center gap-2 mb-4 px-4 py-2 rounded-xl border hover:bg-slate-100 transition">
                <ArrowLeft size={18} />
              </button>
              {renderCalculator()}

            </div>
            <ResultPanel result={result} />
            <RecommendedPacks litres={result?.paintRequired || 0} />
          </>
          )}
      </div>
    </>
  );
}