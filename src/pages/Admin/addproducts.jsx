import React, { useState } from "react";
import ProductFields from "./components/products/productFields";
import { categories } from "./data/categories";

function AddProducts() {
  const [category, setCategory] = useState("Paint");
  const [images, setImages] = useState([]);

  console.log(categories)
  const handleImageUpload = (e) => {
    setImages(Array.from(e.target.files));
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4 mb-8">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold text-blue-400">
            Add Product
          </h1>
          <p className="text-slate-400">
            Add paints, brushes, rollers, fevicol and accessories
          </p>
        </div>

        <button className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg">
          Publish Product
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* LEFT SIDE */}
        <div className="lg:col-span-2 space-y-6">

          {/* Product Name */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <label className="block mb-2 text-blue-400">
              Product Name
            </label>

            <input
              type="text"
              placeholder="Asian Paints Royale"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3"
            />
          </div>

          {/* Description */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <label className="block mb-2 text-blue-400">
              Description
            </label>

            <textarea
              rows="5"
              placeholder="Enter product description..."
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3 resize-none"
            />
          </div>

          {/* Images */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <label className="block mb-3 text-blue-400">
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
                    alt=""
                    className="h-24 w-full object-cover rounded-lg border border-slate-700"
                  />
                ))}
              </div>
            )}
          </div>

          {/* Pricing */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h2 className="text-xl text-blue-400 mb-4">
              Pricing
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Cost Price"
                className="bg-slate-800 border border-slate-700 rounded-lg p-3"
              />

              <input
                type="number"
                placeholder="Selling Price"
                className="bg-slate-800 border border-slate-700 rounded-lg p-3"
              />
            </div>
          </div>

          {/* Inventory */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h2 className="text-xl text-blue-400 mb-4">
              Inventory
            </h2>

            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="number"
                placeholder="Stock Quantity"
                className="bg-slate-800 border border-slate-700 rounded-lg p-3"
              />

              <input
                type="text"
                placeholder="SKU"
                className="bg-slate-800 border border-slate-700 rounded-lg p-3"
              />
            </div>
          </div>

          {/* Dynamic Product Fields */}
          <ProductFields category={category} />
        </div>

        {/* RIGHT SIDEBAR */}
        <div className="space-y-6">

          {/* Category */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h2 className="text-xl text-blue-400 mb-4">
              Category
            </h2>

            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3"
            >
              {categories.map((item) => (
                <option key={item.name} value={item.name}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          {/* Brand */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h2 className="text-xl text-blue-400 mb-4">
              Brand
            </h2>

            <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3">
              <option>Asian Paints</option>
              <option>Berger</option>
              <option>Nerolac</option>
              <option>Dulux</option>
              <option>Indigo Paints</option>
              <option>Birla White</option>
              <option>JK Wall Putty</option>
              <option>Fevicol</option>
            </select>
          </div>

          {/* Status */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h2 className="text-xl text-blue-400 mb-4">
              Product Status
            </h2>

            <select className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3">
              <option>Active</option>
              <option>Draft</option>
              <option>Out Of Stock</option>
            </select>
          </div>

          {/* Tags */}
          <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
            <h2 className="text-xl text-blue-400 mb-4">
              Tags
            </h2>

            <input
              type="text"
              placeholder="premium, washable"
              className="w-full bg-slate-800 border border-slate-700 rounded-lg p-3"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddProducts;