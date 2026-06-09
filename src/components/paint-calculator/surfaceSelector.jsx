import { Paintbrush, ArrowRight } from "lucide-react";

export default function SurfaceSelector({ active, setActive, surfaces, }) {
  return (
    <div className="bg-white rounded-3xl shadow-lg  p-3">
      <div className="mb-4">
        <h3 className="font-semibold  text-[20px]">
          Select Surface
        </h3>
        <p className="text-[14px] text-gray-600">Choose the area you want to paint</p>
      </div>
      <div className="space-y-2">

        {surfaces.map((surface) => (
          <button key={surface.id} onClick={() => setActive(surface.id)}
            className={`w-full flex justify-between items-center gap-2 p-2 rounded-2xl border-gray-300 border overflow-hidden
            ${active === surface.id
                ? "border-violet-500 border-2 text-violet-500"
                : "hover:border-violet-500"
              }`}>
            <div className="flex items-center justify-center gap-2">
              <img className='w-15 h-15' src={surface.img} />
              <div className="gap-[8px] flex flex-col text-start">
                <span className="font-medium text-[15px]">
                  {surface.title}
                </span>
                <span className="text-[13px] font-extralight">{surface.about}</span>
              </div>
            </div>
            <ArrowRight size={18} />
          </button>
        ))}

      </div>
    </div>
  );
}