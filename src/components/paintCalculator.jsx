import React, { useState } from "react";

function PaintCalculator() {
  const [length, setLength] = useState(10);
  const [width, setWidth] = useState(10);
  const [height, setHeight] = useState(10);
  const [unit, setUnit] = useState("ft");
  const [result, setResult] = useState(0);

  const calculatePaint = () => {
    let l = length;
    let w = width;
    let h = height;

    if (unit === "inch") {
      l = length / 12;
      w = width / 12;
      h = height / 12;
    }

    if (unit === "cm") {
      l = length / 30.48;
      w = width / 30.48;
      h = height / 30.48;
    }

    const area = 2 * (l * h + w * h);
    const liters = area / 100;

    setResult(liters.toFixed(1));
  };

  return (
    <div className="w-full bg-white rounded-[30px] shadow-md p-3 md:p-7 border border-gray-100">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center text-2xl">
          🧮
        </div>

        <div>
          <h2 className="text-2xl font-bold text-[#111827]">
            Paint Calculator
          </h2>

          <p className="text-sm text-gray-500">
            Enter room dimensions to calculate paint quantity
          </p>
        </div>
      </div>

      <div className="mb-5">
        <p className="text-sm font-semibold text-gray-700 mb-2">
          Select Measurement Unit
        </p>

        <div className="flex gap-3">
          <button
            onClick={() => setUnit("ft")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold duration-300 ${unit === "ft"
                ? "bg-[#0B1238] text-white"
                : "bg-gray-100 text-gray-700"
              }`}
          >
            Feet (ft)
          </button>

          <button
            onClick={() => setUnit("inch")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold duration-300 ${unit === "inch"
                ? "bg-[#0B1238] text-white"
                : "bg-gray-100 text-gray-700"
              }`}
          >
            Inch
          </button>

          <button
            onClick={() => setUnit("cm")}
            className={`px-4 py-2 rounded-xl text-sm font-semibold duration-300 ${unit === "cm"
                ? "bg-[#0B1238] text-white"
                : "bg-gray-100 text-gray-700"
              }`}
          >
            CM
          </button>
        </div>
      </div>

      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-gray-700 font-semibold text-sm">
              Room Length
            </p>

            <p className="text-xs text-gray-500">
              Enter wall length in {unit}
            </p>
          </div>

          <div className="flex items-center justify-between w-[150px] border border-gray-200 rounded-xl px-3 py-2 bg-[#fafafa]">
            <button
              onClick={() =>
                setLength(length > 0 ? length - 1 : 0)
              }
              className="w-6 h-6 rounded-full bg-white shadow text-sm text-blue-600 font-bold hover:bg-blue-50 duration-300 flex items-center justify-center"
            >
              -
            </button>

            <input
              type="number"
              value={length}
              onChange={(e) =>
                setLength(Number(e.target.value))
              }
              className="w-12 bg-transparent text-center outline-none text-sm font-bold text-gray-800"
            />

            <button
              onClick={() => setLength(length + 1)}
              className="w-6 h-6 rounded-full bg-white shadow text-sm text-blue-600 font-bold hover:bg-blue-50 duration-300 flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-gray-700 font-semibold text-sm">
              Room Width
            </p>

            <p className="text-xs text-gray-500">
              Enter wall width in {unit}
            </p>
          </div>

          <div className="flex items-center justify-between w-[150px] border border-gray-200 rounded-xl px-3 py-2 bg-[#fafafa]">
            <button
              onClick={() =>
                setWidth(width > 0 ? width - 1 : 0)
              }
              className="w-6 h-6 rounded-full bg-white shadow text-sm text-blue-600 font-bold hover:bg-blue-50 duration-300 flex items-center justify-center"
            >
              -
            </button>

            <input
              type="number"
              value={width}
              onChange={(e) =>
                setWidth(Number(e.target.value))
              }
              className="w-12 bg-transparent text-center outline-none text-sm font-bold text-gray-800"
            />

            <button
              onClick={() => setWidth(width + 1)}
              className="w-6 h-6 rounded-full bg-white shadow text-sm text-blue-600 font-bold hover:bg-blue-50 duration-300 flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between gap-3">
          <div>
            <p className="text-gray-700 font-semibold text-sm">
              Room Height
            </p>

            <p className="text-xs text-gray-500">
              Enter wall height in {unit}
            </p>
          </div>

          <div className="flex items-center justify-between w-[150px] border border-gray-200 rounded-xl px-3 py-2 bg-[#fafafa]">
            <button
              onClick={() =>
                setHeight(height > 0 ? height - 1 : 0)
              }
              className="w-6 h-6 rounded-full bg-white shadow text-sm text-blue-600 font-bold hover:bg-blue-50 duration-300 flex items-center justify-center"
            >
              -
            </button>

            <input
              type="number"
              value={height}
              onChange={(e) =>
                setHeight(Number(e.target.value))
              }
              className="w-12 bg-transparent text-center outline-none text-sm font-bold text-gray-800"
            />

            <button
              onClick={() => setHeight(height + 1)}
              className="w-6 h-6 rounded-full bg-white shadow text-sm text-blue-600 font-bold hover:bg-blue-50 duration-300 flex items-center justify-center"
            >
              +
            </button>
          </div>
        </div>

        <button
          onClick={calculatePaint}
          className="w-full bg-[#0B1238] hover:bg-[#111b52] text-white py-3 rounded-2xl text-md font-semibold duration-300 mt-2"
        >
          Calculate Paint
        </button>

        <div className="bg-gradient-to-r from-indigo-100 to-blue-100 rounded-3xl p-5 flex items-center justify-between mt-2">
          <div>
            <p className="text-gray-600 text-sm font-medium">
              Estimated Paint
            </p>

            <h1 className="text-5xl font-bold text-[#111827] mt-1">
              {result}
            </h1>

            <p className="text-gray-600 mt-1">
              Litres required for your room
            </p>
          </div>

          <div className="text-6xl">🪣</div>
        </div>
      </div>
    </div>
  );
}

export default PaintCalculator;