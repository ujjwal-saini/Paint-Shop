import { Minus, Plus } from "lucide-react";

export default function CounterInput({ label, value, setValue, step = 1, }) {
  return (
    <div className="flex justify-between w-full gap-2">
      <div className="flex-1">
        <label className="block mb-2 font-medium">
          {label}
        </label>
        <span className="text-gray-700 font-light text-[14px]">Enter {label}</span>
      </div>
      <div className="flex-1 flex items-center justify-between border rounded-2xl border-gray-200 px-9 py-1">

        <button
          type="button"
          onClick={() =>
            setValue(
              Math.max(0, value - step)
            )
          }
          className="p-2"
        >
          <Minus size={18} />
        </button>

        <span className="font-semibold text-lg">
          {value}
        </span>

        <button
          type="button"
          onClick={() =>
            setValue(value + step)
          }
          className="p-2"
        >
          <Plus size={18} />
        </button>

      </div>
    </div>
  );
}