import { useState } from "react";
import CounterInput from "../counterInput";
import { CalculatePaint, CalculatePrimer, } from "../../../utils/calculatorUtils";
import { Calculator } from 'lucide-react'
export default function WallCalculator({ onResult, surfaces }) {
  const [length, setLength] = useState(12);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [coats, setCoats] = useState(2);

  const handleCalculate = () => {
    const area = 2 * (length + width) * height;
    const paintRequired =
      CalculatePaint({
        area,
        coats,
        coverage: 120,
      });
    const primerRequired =
      CalculatePrimer({
        area,
        coverage: 150,
      });
    onResult({
      area,
      paintRequired,
      primerRequired,
    });
  };

  return (
    <div className="bg-white p-4 rounded-3xl shadow-sm">
      <div className="flex items-center gap-1.5">
        <img className="h-24" src={surfaces[0].img} alt={surfaces[0].title} />
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-medium ">
            Wall Paint Calculator
          </h2>
          <p className="text-gray-700 font-light text-[14px]">Enter gate details to calcutate paint requirement </p>
        </div>

      </div>
      <div className="space-y-8 mt-5">

        <CounterInput
          label="Room Length (ft)"
          value={length}
          setValue={setLength}
        />

        <CounterInput
          label="Room Width (ft)"
          value={width}
          setValue={setWidth}
        />

        <CounterInput
          label="Wall Height (ft)"
          value={height}
          setValue={setHeight}
        />

        <CounterInput
          label="Coats"
          value={coats}
          setValue={setCoats}
        />

      </div>

      <button
        onClick={handleCalculate}
        className="flex gap-2 justify-center w-full mt-8 bg-violet-600 text-white py-3 rounded-xl"
      >
        <Calculator size={25} />
        Calculate Paint
      </button>

    </div>
  );
}