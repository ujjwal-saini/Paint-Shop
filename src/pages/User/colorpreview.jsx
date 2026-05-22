import React, { useRef, useState } from "react";
import {
  Palette,
  Upload,
  Wand2,
  CheckCircle2,
  PaintBucket,
  Image as ImageIcon,
} from "lucide-react";

function Colorpreview() {
  const [selectedColor, setSelectedColor] = useState("#6366F1");
  const [previewImage, setPreviewImage] = useState(null);

  const fileInputRef = useRef();

  const colors = [
    "#6366F1",
    "#EC4899",
    "#22C55E",
    "#F97316",
    "#0EA5E9",
    "#FACC15",
    "#111827",
    "#EF4444",
    "#14B8A6",
    "#A855F7",
    "#F43F5E",
    "#84CC16",
  ];

  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    if (file) {
      setPreviewImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className="bg-[#f5f7fb] min-h-screen overflow-hidden">

      <section className="relative bg-gradient-to-r from-[#312E81] via-[#5B21B6] to-[#9333EA] text-white overflow-hidden">

        <div className="absolute top-0 right-0 w-80 h-80 bg-pink-400/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24 relative z-10">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div className="text-center lg:text-left">

              <p className="uppercase tracking-[4px] text-sm text-indigo-200 mb-4">
                AI Wall Preview
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Upload Your Room <br />
                & Preview Colors
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-8">
                Upload your room image and instantly preview
                beautiful paint colors before painting your walls.
              </p>

              <div className="flex flex-wrap gap-4 mt-8 justify-center lg:justify-start">

                <button
                  onClick={() => fileInputRef.current.click()}
                  className="bg-white text-[#4F46E5] px-8 py-3 rounded-full font-semibold hover:scale-105 duration-300 shadow-xl flex items-center gap-3"
                >
                  <Upload size={20} />
                  Upload Room
                </button>

                <button className="bg-white/10 border border-white/20 backdrop-blur-xl px-8 py-3 rounded-full font-semibold hover:bg-white/20 duration-300">
                  Explore Colors
                </button>

              </div>

            </div>

            <div className="flex justify-center">

              <div className="bg-white/10 border border-white/20 backdrop-blur-2xl rounded-[40px] p-8 sm:p-10 shadow-2xl w-full max-w-md">

                <div className="bg-white rounded-[30px] p-5 shadow-xl">

                  <div
                    className="rounded-[25px] h-[320px] overflow-hidden relative"
                    style={{ backgroundColor: selectedColor }}
                  >

                    {previewImage ? (
                      <img
                        src={previewImage}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center text-center p-6">

                        <Palette
                          size={70}
                          className="text-white mb-5"
                        />

                        <h3 className="text-2xl font-bold text-white">
                          Room Preview
                        </h3>

                        <p className="text-white/80 mt-3 leading-7">
                          Upload your room image to preview wall colors.
                        </p>

                      </div>
                    )}

                    <div
                      className="absolute inset-0 opacity-40 mix-blend-multiply transition duration-500"
                      style={{ backgroundColor: selectedColor }}
                    ></div>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

        <div className="grid lg:grid-cols-2 gap-10 items-start">

          <div className="bg-white rounded-[35px] shadow-2xl p-6 sm:p-8">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center">
                <PaintBucket className="text-indigo-600" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Select Paint Shade
                </h2>

                <p className="text-sm text-gray-500">
                  Tap on colors to change wall preview
                </p>
              </div>

            </div>

            <div className="grid grid-cols-4 sm:grid-cols-6 gap-4">

              {colors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedColor(color)}
                  className={`h-16 rounded-2xl border-4 transition duration-300 ${selectedColor === color
                      ? "border-black scale-110"
                      : "border-transparent"
                    }`}
                  style={{ backgroundColor: color }}
                ></button>
              ))}

            </div>

            <div className="mt-10 bg-gray-50 rounded-3xl p-6 border border-gray-100">

              <div className="flex items-center justify-between gap-5">

                <div>
                  <p className="text-sm text-gray-500">
                    Selected Color
                  </p>

                  <h2 className="text-3xl font-bold text-gray-800 mt-2">
                    {selectedColor}
                  </h2>

                  <p className="text-sm text-gray-500 mt-2">
                    Perfect for modern interiors
                  </p>
                </div>

                <div
                  className="w-24 h-24 rounded-3xl shadow-xl border-4 border-white"
                  style={{ backgroundColor: selectedColor }}
                ></div>

              </div>

            </div>

          </div>

          <div className="bg-white rounded-[35px] shadow-2xl p-6 sm:p-8">

            <div className="flex items-center gap-4 mb-8">

              <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center">
                <ImageIcon className="text-pink-600" />
              </div>

              <div>
                <h2 className="text-2xl font-bold text-gray-800">
                  Upload Your Room
                </h2>

                <p className="text-sm text-gray-500">
                  JPG, PNG supported
                </p>
              </div>

            </div>

            <input
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageUpload}
              className="hidden"
            />

            <div
              onClick={() => fileInputRef.current.click()}
              className="border-2 border-dashed border-indigo-200 rounded-[30px] p-10 text-center cursor-pointer hover:bg-indigo-50 duration-300"
            >

              <Upload
                size={60}
                className="mx-auto text-indigo-600 mb-5"
              />

              <h3 className="text-2xl font-bold text-gray-800">
                Click To Upload
              </h3>

              <p className="text-gray-500 mt-3 leading-7">
                Upload your bedroom, living room,
                kitchen, or office image for live wall preview.
              </p>

              <button className="mt-8 bg-[#4F46E5] text-white px-8 py-3 rounded-full font-semibold hover:scale-105 duration-300">
                Choose Image
              </button>

            </div>

            {previewImage && (
              <div className="mt-8 rounded-[30px] overflow-hidden shadow-xl border-4 border-gray-100">

                <img
                  src={previewImage}
                  alt=""
                  className="w-full h-[250px] object-cover"
                />

              </div>
            )}

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

          <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300">

            <Palette
              className="text-pink-600 mb-5"
              size={42}
            />

            <h3 className="text-xl font-semibold text-gray-800">
              Real Preview
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-7">
              Visualize paint shades on your own room walls.
            </p>

          </div>

          <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300">

            <Wand2
              className="text-indigo-600 mb-5"
              size={42}
            />

            <h3 className="text-xl font-semibold text-gray-800">
              Smart Experience
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-7">
              Instantly customize your room with modern colors.
            </p>

          </div>

          <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300">

            <PaintBucket
              className="text-orange-500 mb-5"
              size={42}
            />

            <h3 className="text-xl font-semibold text-gray-800">
              Premium Shades
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-7">
              Luxury matte, glossy, and designer wall colors.
            </p>

          </div>

          <div className="bg-white p-7 rounded-3xl shadow-md hover:shadow-2xl transition duration-300">

            <CheckCircle2
              className="text-green-600 mb-5"
              size={42}
            />

            <h3 className="text-xl font-semibold text-gray-800">
              Easy Selection
            </h3>

            <p className="text-gray-600 mt-3 text-sm leading-7">
              Pick the perfect wall color confidently.
            </p>

          </div>

        </div>

      </section>

      <section className="bg-black text-white py-16 md:py-20 px-5 mt-16">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Need Professional Color Suggestions?
          </h2>

          <p className="mt-5 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Get expert paint combinations and interior
            color recommendations for your dream home.
          </p>

          <button className="mt-8 bg-[#4F46E5] hover:bg-[#4338CA] transition duration-300 px-8 py-4 rounded-full font-semibold text-lg shadow-lg">
            Talk To Experts
          </button>

        </div>

      </section>

    </div>
  );
}

export default Colorpreview;