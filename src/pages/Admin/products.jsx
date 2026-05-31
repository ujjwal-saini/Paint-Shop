import React from "react";
import { Eye, Pencil, Trash2, Plus, Search } from "lucide-react";
import { Link } from "react-router-dom";
function Productsadmin() {
  const products = [
    {
      id: 1,
      name: "Asian Paints Royale",
      category: "Paint",
      brand: "Asian Paints",
      price: 2500,
      stock: 45,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?w=500",
    },
    {
      id: 2,
      name: "Berger Primer",
      category: "Primer",
      brand: "Berger",
      price: 1200,
      stock: 20,
      status: "Active",
      image:
        "https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=500",
    },
    {
      id: 3,
      name: "Paint Brush 4 Inch",
      category: "Brush",
      brand: "JK Tools",
      price: 180,
      stock: 5,
      status: "Low Stock",
      image:
        "https://images.unsplash.com/photo-1517705008128-361805f42e86?w=500",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white p-4 md:p-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl md:text-4xl font-bold text-blue-400">
            Products
          </h1>
          <p className="text-slate-400">
            Manage all paint shop products
          </p>
        </div>

        <Link to={'addproducts'} className="flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 px-5 py-3 rounded-lg w-full sm:w-auto">
          <Plus size={18} />
          Add Product
        </Link>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Total Products</p>
          <h2 className="text-3xl font-bold mt-2">245</h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Paints</p>
          <h2 className="text-3xl font-bold mt-2">95</h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Accessories</p>
          <h2 className="text-3xl font-bold mt-2">110</h2>
        </div>

        <div className="bg-slate-900 border border-slate-800 rounded-xl p-4">
          <p className="text-slate-400 text-sm">Low Stock</p>
          <h2 className="text-3xl font-bold mt-2 text-red-400">12</h2>
        </div>
      </div>

      {/* Search & Filter */}
      <div className="bg-slate-900 border border-slate-800 rounded-xl p-4 mb-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              type="text"
              placeholder="Search products..."
              className="w-full bg-slate-800 border border-slate-700 rounded-lg pl-10 pr-4 py-3"
            />
          </div>

          <select className="bg-slate-800 border border-slate-700 rounded-lg p-3 md:w-52">
            <option>All Categories</option>
            <option>Paint</option>
            <option>Primer</option>
            <option>Brush</option>
            <option>Roller</option>
            <option>Putty</option>
          </select>
        </div>
      </div>

      {/* Desktop Table */}
      <div className="hidden lg:block bg-slate-900 border border-slate-800 rounded-xl overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full min-w-[900px]">
            <thead className="bg-slate-800">
              <tr>
                <th className="text-left p-4">Product</th>
                <th className="text-left p-4">Category</th>
                <th className="text-left p-4">Brand</th>
                <th className="text-left p-4">Price</th>
                <th className="text-left p-4">Stock</th>
                <th className="text-left p-4">Status</th>
                <th className="text-center p-4">Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr
                  key={product.id}
                  className="border-t border-slate-800 hover:bg-slate-900/50"
                >
                  <td className="p-4">
                    <div className="flex items-center gap-3">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-14 h-14 rounded-lg object-cover"
                      />

                      <span>{product.name}</span>
                    </div>
                  </td>

                  <td className="p-4">{product.category}</td>
                  <td className="p-4">{product.brand}</td>
                  <td className="p-4">₹{product.price}</td>
                  <td className="p-4">{product.stock}</td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs ${product.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                        }`}
                    >
                      {product.status}
                    </span>
                  </td>

                  <td className="p-4">
                    <div className="flex justify-center gap-3">
                      <button className="text-blue-400 hover:text-blue-300">
                        <Eye size={18} />
                      </button>

                      <button className="text-yellow-400 hover:text-yellow-300">
                        <Pencil size={18} />
                      </button>

                      <button className="text-red-400 hover:text-red-300">
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Mobile Cards */}
      <div className="lg:hidden space-y-4">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-slate-900 border border-slate-800 rounded-xl p-4"
          >
            <div className="flex gap-3">
              <img
                src={product.image}
                alt={product.name}
                className="w-16 h-16 rounded-lg object-cover"
              />

              <div className="flex-1">
                <h3 className="font-semibold">{product.name}</h3>

                <p className="text-sm text-slate-400">
                  {product.category}
                </p>

                <p className="text-blue-400 font-semibold mt-1">
                  ₹{product.price}
                </p>

                <p className="text-xs text-slate-400">
                  Stock: {product.stock}
                </p>
              </div>
            </div>

            <div className="flex justify-between mt-4">
              <button className="bg-blue-600 px-4 py-2 rounded-lg">
                View
              </button>

              <button className="bg-yellow-600 px-4 py-2 rounded-lg">
                Edit
              </button>

              <button className="bg-red-600 px-4 py-2 rounded-lg">
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Productsadmin;