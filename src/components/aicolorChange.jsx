import { useState } from "react";
import { ChevronLeft, ChevronRight, Upload } from "lucide-react";
import colors from './../json/colorshade.json'
// const colors = [
//   {
//     name: "Ocean Breeze",
//     color: "#8FB9B2",
//   },
//   {
//     name: "Soft Sage",
//     color: "#A4B494",
//   },
//   {
//     name: "Warm Beige",
//     color: "#D8C3A5",
//   },
//   {
//     name: "Dusty Rose",
//     color: "#D8A7B1",
//   },
//   {
//     name: "Royal Blue",
//     color: "#4169E1",
//   },
// ];

const AicolorChange = () => {
  const [image, setImage] = useState(
    "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=1200"
  );
  console.log(colors)
  const [selected, setSelected] = useState(0);

  const handleUpload = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    const url = URL.createObjectURL(file);

    setImage(url);
  };

  return (
    <div className="w-full rounded-3xl bg-white p-4 md:p-6 shadow">
      <h2 className="text-3xl font-bold mb-6">
        Color Preview
      </h2>

      <div className="grid lg:grid-cols-[320px_1fr] gap-6">

        {/* Upload */}

        <div className="border rounded-3xl p-6">
          <label className="cursor-pointer flex flex-col items-center justify-center h-[350px] border-2 border-dashed rounded-2xl">
            <Upload size={40} />

            <p className="mt-4 font-medium">
              Upload Room Image
            </p>

            <input
              type="file"
              hidden
              accept="image/*"
              onChange={handleUpload}
            />
          </label>
        </div>

        {/* Preview */}

        <div>
          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="relative"
                style={{
                  backgroundColor:
                    colors[selected].color,
                }}
              >
                <img
                  src={image}
                  alt=""
                  className="w-full h-[450px] object-cover mix-blend-multiply opacity-90"
                />
              </div>
            </div>

            <button
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-3"
              onClick={() =>
                setSelected((prev) =>
                  prev === 0
                    ? colors.length - 1
                    : prev - 1
                )
              }
            >
              <ChevronLeft />
            </button>

            <button
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-white rounded-full p-3"
              onClick={() =>
                setSelected((prev) =>
                  prev === colors.length - 1
                    ? 0
                    : prev + 1
                )
              }
            >
              <ChevronRight />
            </button>
          </div>

          {/* Thumbnails */}

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mt-6">
            {colors.map((item, index) => (
              <button
                key={item.name}
                onClick={() =>
                  setSelected(index)
                }
                className={`rounded-xl overflow-hidden border-2 ${selected === index
                  ? "border-violet-600"
                  : "border-gray-200"
                  }`}
              >
                <div
                  className="h-24"
                  style={{
                    backgroundColor:
                      item.color,
                  }}
                />

                <p className="text-sm p-2">
                  {item.name}
                </p>
              </button>
            ))}
          </div>

          {/* Selected Preview */}

          <div className="mt-6 rounded-2xl border p-4 flex gap-4">
            <div
              className="w-24 h-24 rounded-xl"
              style={{
                backgroundColor:
                  colors[selected].color,
              }}
            />

            <div>
              <h3 className="font-bold text-xl">
                {colors[selected].name}
              </h3>

              <p className="text-gray-500">
                AI generated color preview
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AicolorChange