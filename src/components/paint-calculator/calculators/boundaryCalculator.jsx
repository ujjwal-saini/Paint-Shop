import { useState } from "react";
import CounterInput from "../counterInput";
import { CalculatePaint, CalculatePrimer, } from "../../../utils/calculatorUtils";
import { Calculator } from 'lucide-react'
const BoundaryCalculator = ({ onResult, surfaces }) => {
  const [length, setLength] = useState(50);
  const [height, setHeight] = useState(6);
  const [coats, setCoats] = useState(2);
  const calculate = () => {
    const area = length * height * 2;
    onResult({
      area,
      paintRequired:
        CalculatePaint({
          area,
          coats,
          coverage: 120,
        }),
      primerRequired:
        CalculatePrimer({
          area,
          coverage: 150,
        }),
    });
  };

  return (
    <div className="bg-white p-4 rounded-3xl">

      <div className="flex items-center gap-1.5">
        <img className="h-24" src={surfaces[4].img} alt={surfaces[4].title} />
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-medium ">
            Boundary Wall Calculator
          </h2>
          <p className="text-gray-700 font-light text-[14px]">Enter gate details to calcutate paint requirement </p>
        </div>

      </div>

      <div className="space-y-8 mt-5">

        <CounterInput
          label="Length"
          value={length}
          setValue={setLength}
        />

        <CounterInput
          label="Height"
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
        onClick={calculate}
        className="flex gap-2 justify-center w-full mt-8 bg-violet-600 text-white py-3 rounded-xl"
      >
        <Calculator size={25} />
        Calculate Paint
      </button>

    </div>
  );
}

export default BoundaryCalculator