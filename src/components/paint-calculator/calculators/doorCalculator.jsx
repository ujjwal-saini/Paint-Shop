import { useState } from "react";
import CounterInput from "../counterInput";
import { CalculatePaint, CalculatePrimer, } from "../../../utils/calculatorUtils";
import { Calculator } from 'lucide-react'
export default function DoorCalculator({ onResult, surfaces }) {
  const [width, setWidth] = useState(3);
  const [height, setHeight] = useState(7);
  const [quantity, setQuantity] = useState(1);
  const [coats, setCoats] = useState(2);

  const calculate = () => {
    const area = width * height * quantity * 2;

    onResult({
      area,
      paintRequired:
        CalculatePaint({
          area,
          coats,
          coverage: 100,
        }),
      primerRequired:
        CalculatePrimer({
          area,
          coverage: 120,
        }),
    });
  };

  return (
    <div className="bg-white p-4 rounded-3xl">

      <div className="flex items-center gap-1.5">
        <img className="h-24" src={surfaces[1].img} alt={surfaces[1].title} />
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-medium ">
            Door Paint Calculator
          </h2>
          <p className="text-gray-700 font-light text-[14px]">Enter gate details to calcutate paint requirement </p>
        </div>
      </div>

      <div className="space-y-8 mt-5">

        <CounterInput
          label="Door Width"
          value={width}
          setValue={setWidth}
        />

        <CounterInput
          label="Door Height"
          value={height}
          setValue={setHeight}
        />

        <CounterInput
          label="Quantity"
          value={quantity}
          setValue={setQuantity}
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