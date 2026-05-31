import React, { useState } from "react";

function AddProducts() {
  const [images, setImages] = useState([]);

  const handleImageUpload = (e) => {
    setImages(Array.from(e.target.files));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-400">
            Add Paint Product
          </h1>
          <p className="text-slate-400 mt-1">
            Create and manage paint products for your store
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3">
          <button className="px-5 py-3 rounded-lg border border-slate-700 hover:bg-slate-800">
            Save Draft
          </button>

          <button className="px-5 py-3 rounded-lg bg-blue-600 hover:bg-blue-700">
            Publish Product
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Product Title */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <label className="block mb-2 text-blue-400 font-medium">
              Product Title
            </label>

            <input
              type="text"
              placeholder="Asian Paints Royale"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none"
            />
          </div>

          {/* Description */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <label className="block mb-2 text-blue-400 font-medium">
              Product Description
            </label>

            <textarea
              rows="6"
              placeholder="Enter product description..."
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 outline-none resize-none"
            />
          </div>

          {/* Image Upload */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <label className="block mb-4 text-blue-400 font-medium">
              Product Images
            </label>

            <input
              type="file"
              multiple
              onChange={handleImageUpload}
              className="w-full"
            />

            {images.length > 0 && (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-4">
                {images.map((image, index) => (
                  <img
                    key={index}
                    src={URL.createObjectURL(image)}
                    alt="preview"
                    className="w-full h-24 object-cover rounded-lg border border-slate-700"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Pricing */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">
              Pricing
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Regular Price"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3"
              />

              <input
                type="number"
                placeholder="Sale Price"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3"
              />
            </div>
          </div>

          {/* Inventory */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">
              Inventory
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Stock Quantity"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="Coverage Area (sq ft)"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3"
              />
            </div>
          </div>

          {/* Paint Details */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">
              Paint Details
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Color Code"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="Drying Time"
                className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3"
              />
            </div>
          </div>
        </div>

        {/* Right Sidebar */}
        <div className="space-y-6">
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h2 className="text-xl font-semibold text-blue-400 mb-5">
              Organize
            </h2>

            <div className="space-y-4">
              <div>
                <label className="text-sm text-slate-400">
                  Category
                </label>

                <select className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg p-3">
                  <option>Interior Paint</option>
                  <option>Exterior Paint</option>
                  <option>Primer</option>
                  <option>Putty</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-400">
                  Brand
                </label>

                <select className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg p-3">
                  <option>Asian Paints</option>
                  <option>Berger</option>
                  <option>Nerolac</option>
                  <option>Dulux</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-400">
                  Finish Type
                </label>

                <select className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg p-3">
                  <option>Matte</option>
                  <option>Glossy</option>
                  <option>Satin</option>
                </select>
              </div>

              <div>
                <label className="text-sm text-slate-400">
                  Tags
                </label>

                <input
                  type="text"
                  placeholder="washable, premium"
                  className="w-full mt-2 bg-slate-800 border border-slate-700 rounded-lg p-3"
                />
              </div>
            </div>
          </div>

          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h2 className="text-xl font-semibold text-blue-400 mb-4">
              Product Status
            </h2>

            <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3">
              <option>Active</option>
              <option>Draft</option>
              <option>Out Of Stock</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;