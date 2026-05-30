import { useRef, useState } from "react";
import { Upload, ChevronLeft, ChevronRight, } from "lucide-react";
import colors from "../../json/colorshade.json";

const AIColorPreview = () => {
  const inputRef = useRef();

  const [image, setImage] = useState(
    "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg"
  );

  const [active, setActive] = useState(0);
  const [page, setPage] = useState(0);

  const ITEMS_PER_PAGE = 8;

  const totalPages = Math.ceil(
    colors.length / ITEMS_PER_PAGE
  );

  const visibleColors = colors.slice(
    page * ITEMS_PER_PAGE,
    (page + 1) * ITEMS_PER_PAGE
  );

  const uploadImage = (e) => {
    const file = e.target.files?.[0];

    if (!file) return;

    setImage(URL.createObjectURL(file));
  };

  const nextColor = () => {
    setActive((prev) =>
      prev === colors.length - 1 ? 0 : prev + 1
    );
  };

  const prevColor = () => {
    setActive((prev) =>
      prev === 0 ? colors.length - 1 : prev - 1
    );
  };

  const nextPage = () => {
    if (page < totalPages - 1) {
      setPage((prev) => prev + 1);
    }
  };

  const prevPage = () => {
    if (page > 0) {
      setPage((prev) => prev - 1);
    }
  };


  return (
    <section className="w-full rounded-[32px] bg-white p-4 md:p-8 shadow-xl">
      <div className="flex items-center gap-3">
        <h2 className="text-3xl font-bold">
          Color Preview
        </h2>

        <span className="px-3 py-1 rounded-full bg-violet-600 text-white text-sm">
          New
        </span>
      </div>

      <p className="text-gray-500 mt-2">
        Upload your room photo and try colors instantly
      </p>

      <div className="grid lg:grid-cols-[320px_1fr] gap-6 mt-8">
        <div>
          <div className="border-2 border-dashed rounded-3xl p-8 h-[420px] flex flex-col justify-center items-center">
            <Upload
              size={60}
              className="text-violet-600"
            />

            <h3 className="font-semibold mt-5">
              Upload Room Image
            </h3>

            <p className="text-gray-500 text-sm">
              JPG PNG WEBP
            </p>

            <button
              onClick={() =>
                inputRef.current.click()
              }
              className="mt-6 bg-violet-600 text-white px-6 py-3 rounded-xl"
            >
              Upload Image
            </button>

            <input
              ref={inputRef}
              type="file"
              hidden
              accept="image/*"
              onChange={uploadImage}
            />
          </div>

          <div className="border rounded-3xl p-5 mt-4">
            <h3 className="font-bold">
              💡 Tips
            </h3>

            <ul className="text-sm text-gray-600 mt-3 space-y-2">
              <li>Use room interior image</li>
              <li>Bright image works best</li>
              <li>Keep wall visible</li>
            </ul>
          </div>
        </div>

        <div className="border rounded-3xl p-5">
          <div className="flex justify-between items-center mb-4">
            <h3 className="font-bold text-xl">
              Try Popular Colors
            </h3>

            <div className="flex gap-2">
              <button
                onClick={prevColor}
                className="w-10 h-10 rounded-full border flex items-center justify-center"
              >
                <ChevronLeft />
              </button>

              <button
                onClick={nextColor}
                className="w-10 h-10 rounded-full border flex items-center justify-center"
              >
                <ChevronRight />
              </button>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-3xl">
            <img
              src={image}
              alt=""
              className="w-full h-[300px] md:h-[500px] object-cover"
            />

            <div
              className="absolute inset-0 mix-blend-multiply"
              style={{
                backgroundColor:
                  colors[active]?.color,
                opacity: 0.45,
              }}
            />
          </div>

          <div className="flex items-center justify-between mt-8 mb-4">
            <h3 className="font-bold text-xl">
              All Colors
            </h3>

            <div className="flex gap-2">
              <button
                onClick={prevPage}
                disabled={page === 0}
                className="w-10 h-10 rounded-full border flex items-center justify-center disabled:opacity-40"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextPage}
                disabled={
                  page === totalPages - 1
                }
                className="w-10 h-10 rounded-full border flex items-center justify-center disabled:opacity-40"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {visibleColors.map(
              (item, index) => {
                const actualIndex = page * ITEMS_PER_PAGE + index;

                return (
                  <button key={actualIndex} onClick={() => setActive(actualIndex)}
                    className={`rounded-2xl overflow-hidden border transition ${active ===
                      actualIndex
                      ? "border-violet-600 ring-2 ring-violet-300"
                      : "border-gray-200"
                      }`}>
                    <div className="relative h-28">
                      <img src={image} alt="" className="w-full h-full object-cover" />

                      <div className="absolute inset-0 mix-blend-multiply"
                        style={{
                          backgroundColor: item.color,
                          opacity: 0.45,
                        }} />
                    </div>

                    <div className="p-2 text-sm font-medium">
                      {item.name}
                    </div>
                  </button>
                );
              }
            )}
          </div>

          <div className="flex justify-center mt-5">
            <span className="text-sm text-gray-500">
              Page {page + 1} of{" "}
              {totalPages}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIColorPreview
