import { useRef, useState } from "react";
import {
  Upload,
  ChevronRight,
  ChevronLeft,
} from "lucide-react";
import { Link } from "react-router-dom";

export default function AIColorPreview() {
  const sliderRef = useRef(null);

  const roomImage =
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg";

  const [image, setImage] = useState(roomImage);

  const [previewImage, setPreviewImage] =
    useState(null);

  const colors = [
    { name: "Ocean Breeze", color: "#84A98C" },
    { name: "Soft Sage", color: "#A4B494" },
    { name: "Warm Beige", color: "#E7D7C1" },
    { name: "Dusty Rose", color: "#D291A4" },
    { name: "Lavender Mist", color: "#E6E6FA" },
    { name: "Royal Blue", color: "#1E3A8A" },
    { name: "Terracotta", color: "#D2694A" },
    { name: "Charcoal Grey", color: "#4B5563" },
    { name: "Forest Green", color: "#2D6A4F" },
    { name: "Olive Grove", color: "#6B8E23" },
    { name: "Sky Blue", color: "#87CEEB" },
    { name: "Midnight Navy", color: "#1B263B" },
  ];

  const uploadImage = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));
  };

  const scrollRight = () => {
    sliderRef.current?.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  const scrollLeft = () => {
    sliderRef.current?.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  return (
    <>
      <section className="w-full mt-8 max-w-8xl mx-auto bg-white p-4 md:p-6">

        <div className="flex  md:flex-row md:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex  items-center gap-3">
              <h2 className="text-[18px] lg:text-2xl md:text-3xl font-bold">
                Color Preview
              </h2>

              <span className="bg-violet-600 text-white text-[12px] lg:text-xs px-2 lg:px-3 py-1 rounded-full">
                New
              </span>
            </div>

            <p className="text-gray-500 text-[13px]  lg:text-sm mt-2">
              Upload your room photo and try colors instantly
            </p>
          </div>

          <Link to="Features/colorpreview" className="text-violet-600 font-semibold text-sm lg:text-md">
            View All
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-5">

          <div className="w-full flex justify-center lg:block lg:w-[230px] shrink-0">
            <label className="border-2 border-dashed border-gray-200 rounded-3xl w-full py-2 lg:py-5  lg:h-[190px] flex flex-col items-center justify-center cursor-pointer hover:border-violet-400 transition">
              <Upload
                size={38}
                className="text-violet-600 h-5 lg:h-10"
              />

              <h4 className="font-semibold  text-[12px] lg:text-md  mt-1 lg:mt-3">
                Upload Room Image
              </h4>

              <p className="text-[10px] lg:text-xs text-gray-500">
                JPG, PNG (Max 5MB)
              </p>

              <div className="mt-2 lg:mt-3 bg-violet-600 px-3 py-1 text-white lg:px-4 lg:py-2 text-[10px] rounded-xl lg:text-sm">
                Upload Image
              </div>

              <input
                hidden
                type="file"
                accept="image/*"
                onChange={uploadImage}
              />
            </label>
          </div>

          <div className="flex-1 min-w-0 relative">

            <button
              onClick={scrollLeft}
              className="flex items-center absolute -left-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full w-9 h-9 items-center justify-center"
            >
              <ChevronLeft size={18} />
            </button>

            <div
              ref={sliderRef}
              className="flex gap-4 overflow-x-auto scroll-smooth scrollbar-hide px-2 custom-scroll"
            >
              {colors.map((item, index) => (
                <button
                  key={index}
                  onClick={() =>
                    setPreviewImage(item)
                  }
                  className="flex-shrink-0 min-w-[180px] sm:min-w-[220px] lg:min-w-[260px] text-left hover:shadow"
                >
                  <div className="relative h-[120px] sm:h-[140px] lg:h-[160px] rounded-2xl overflow-hidden">
                    <img
                      src={image}
                      alt=""
                      className="w-full h-full object-cover"
                    />

                    <div
                      className="absolute inset-0 mix-blend-multiply"
                      style={{
                        backgroundColor:
                          item.color,
                        opacity: 0.45,
                      }}
                    />
                  </div>

                  <p className="mt-3 font-semibold">
                    {item.name}
                  </p>
                </button>
              ))}
            </div>

            <button
              onClick={scrollRight}
              className="flex items-center absolute -right-2 top-1/2 -translate-y-1/2 z-20 bg-white shadow-lg rounded-full w-9 h-9 items-center justify-center"
            >
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </section>

      {previewImage && (
        <div
          className="fixed inset-0 z-50 bg-black/70 flex items-center justify-center p-4"
          onClick={() =>
            setPreviewImage(null)
          }
        >
          <div
            className="bg-white rounded-3xl overflow-hidden max-w-6xl w-full"
            onClick={(e) =>
              e.stopPropagation()
            }
          >
            <div className="flex items-center justify-between p-5 border-b">
              <div>
                <h3 className="text-xl font-bold">
                  {previewImage.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {previewImage.color}
                </p>
              </div>

              <button
                onClick={() =>
                  setPreviewImage(null)
                }
                className="text-3xl"
              >
                ×
              </button>
            </div>

            <div className="relative h-[300px] md:h-[650px]">
              <img
                src={image}
                alt=""
                className="w-full h-full object-cover"
              />

              <div
                className="absolute inset-0 mix-blend-multiply"
                style={{
                  backgroundColor:
                    previewImage.color,
                  opacity: 0.45,
                }}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}