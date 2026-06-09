import { useState } from "react";
import CounterInput from "../counterInput";
import { CalculatePaint, CalculatePrimer, } from "../../../utils/calculatorUtils";
import { Calculator } from 'lucide-react'
export default function GateCalculator({ onResult, surfaces }) {
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(6);
  const [coats, setCoats] = useState(2);
  const [type, setType] = useState("solid");

  const calculate = () => {
    let area = width * height * 2;

    if (type === "grill") {
      area = area * 0.6;
    }

    onResult({
      area,
      paintRequired:
        CalculatePaint({
          area,
          coats,
          coverage: 80,
        }),
      primerRequired:
        CalculatePrimer({
          area,
          coverage: 100,
        }),
    });
  };

  return (
    <div className="bg-white p-4 rounded-3xl">

      <div className="flex items-center gap-1.5">
        <img className="h-24" src={surfaces[2].img} alt={surfaces[2].title} />
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-medium ">
            Gate Paint Calculator
          </h2>
          <p className="text-gray-700 font-light text-[14px]">Enter gate details to calcutate paint requirement </p>
        </div>

      </div>
      <div className="space-y-8 mt-5">

        <CounterInput
          label="Gate Width"
          value={width}
          setValue={setWidth}
        />

        <CounterInput
          label="Gate Height"
          value={height}
          setValue={setHeight}
        />

        <CounterInput
          label="Coats"
          value={coats}
          setValue={setCoats}
        />

      </div>

      <div className="grid grid-cols-2 gap-3 mt-6">

        <button
          onClick={() =>
            setType("solid")
          }
          className={`p-4 rounded-xl border ${type === "solid"
            ? "bg-violet-600 text-white"
            : ""
            }`}
        >
          Solid Gate
        </button>

        <button
          onClick={() =>
            setType("grill")
          }
          className={`p-4 rounded-xl border ${type === "grill"
            ? "bg-violet-600 text-white"
            : ""
            }`}
        >
          Grill Gate
        </button>

      </div>

      <button
        onClick={calculate}
        className="flex gap-2 justify-center w-full mt-8 bg-violet-600 text-white py-3 rounded-xl"
      >
        <Calculator size={25} />
        Calculate Paint
      </button>

    </div>
  );
}