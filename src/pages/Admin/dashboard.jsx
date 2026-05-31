import React from "react";
import { DollarSign, Package, Users, ShoppingCart, TrendingUp } from "lucide-react";

function Dashboard() {
  const cards = [
    { title: "Revenue", value: "₹48,240", icon: <DollarSign size={22} />, color: "border-cyan-400" },
    { title: "Orders", value: "1,284", icon: <Package size={22} />, color: "border-green-400" },
    { title: "Customers", value: "8,742", icon: <Users size={22} />, color: "border-yellow-400" },
    { title: "Products", value: "536", icon: <ShoppingCart size={22} />, color: "border-red-400" }
  ];

  const topProducts = [
    { name: "Asian Paint Premium", sales: "1,250 Units", percent: "18%" },
    { name: "Berger Primer", sales: "980 Units", percent: "32%" },
    { name: "Nerolac Putty", sales: "860 Units", percent: "22%" },
    { name: "Wall Sealer", sales: "740 Units", percent: "28%" },
    { name: "Wood Coating", sales: "620 Units", percent: "25%" }
  ];

  const lowStock = [
    { name: "Asian Paint White", stock: 6 },
    { name: "Berger Red Oxide", stock: 9 },
    { name: "Nerolac Emulsion", stock: 3 },
    { name: "Wall Putty", stock: 7 },
    { name: "Primer Coat", stock: 2 }
  ];

  const recentSales = [
    { product: "Asian Paint Premium", amount: "₹2,549", status: "Completed" },
    { product: "Berger Primer", amount: "₹549", status: "Processing" },
    { product: "Wall Putty", amount: "₹1,299", status: "Completed" },
    { product: "Nerolac Paint", amount: "₹899", status: "Pending" },
    { product: "Wood Finish", amount: "₹1,799", status: "Completed" }
  ];

  return (
    <div className="p-4 sm:p-6 bg-[#081226] min-h-[calc(100vh-80px)] text-white overflow-y-auto">
      <div className="mb-8">
        <p className="text-blue-400 font-semibold">OVERVIEW</p>
        <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold mt-2">Dashboard</h1>
        <p className="text-slate-400 mt-2">Monitor sales, orders and customers from one place.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
        {cards.map((item, i) => (
          <div key={i} className={`bg-[#101c35] border-l-4 ${item.color} rounded-3xl p-5 sm:p-6`}>
            <div className="flex justify-between items-center">
              <h3 className="text-slate-400 font-semibold uppercase text-sm">{item.title}</h3>
              <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                {item.icon}
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold mt-6 sm:mt-8">{item.value}</h2>
            <p className="text-green-400 mt-3 flex items-center gap-2 text-sm">
              <TrendingUp size={16} />
              12.5% this month
            </p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
        <div className="xl:col-span-2 bg-[#101c35] rounded-3xl p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Sales Performance</h2>
          <div className="h-64 sm:h-80 xl:h-96 flex items-end justify-between gap-2 sm:gap-4">
            <div className="w-full bg-gradient-to-t from-cyan-500 to-blue-400 rounded-t-3xl h-28"></div>
            <div className="w-full bg-gradient-to-t from-cyan-500 to-blue-400 rounded-t-3xl h-44"></div>
            <div className="w-full bg-gradient-to-t from-cyan-500 to-blue-400 rounded-t-3xl h-36"></div>
            <div className="w-full bg-gradient-to-t from-cyan-500 to-blue-400 rounded-t-3xl h-56"></div>
            <div className="w-full bg-gradient-to-t from-cyan-500 to-blue-400 rounded-t-3xl h-48"></div>
            <div className="w-full bg-gradient-to-t from-cyan-500 to-blue-400 rounded-t-3xl h-72"></div>
          </div>
        </div>

        <div className="bg-[#101c35] rounded-3xl p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-6">Recent Activity</h2>
          <div className="space-y-6">
            <div><h3 className="font-semibold">New Paint Order</h3><p className="text-slate-400 text-sm">20L Asian Paints ordered</p></div>
            <div><h3 className="font-semibold">Stock Updated</h3><p className="text-slate-400 text-sm">Berger Primer added</p></div>
            <div><h3 className="font-semibold">New Customer</h3><p className="text-slate-400 text-sm">Customer account created</p></div>
            <div><h3 className="font-semibold">Payment Received</h3><p className="text-slate-400 text-sm">₹12,500 credited</p></div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6 mt-6">
        <div className="bg-[#101c35] rounded-3xl p-5">
          <div className="flex justify-between mb-6">
            <h2 className="text-xl font-bold">Top Selling Products</h2>
            <button className="px-3 py-1 rounded-lg bg-white/10 text-sm">Today</button>
          </div>

          <div className="space-y-4">
            {topProducts.map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt="" className="w-14 h-14 rounded-xl object-cover bg-white/10 p-1" />
                  <div>
                    <h3 className="font-medium">{item.name}</h3>
                    <p className="text-slate-400 text-sm">{item.sales}</p>
                  </div>
                </div>
                <span className="bg-green-500/20 text-green-400 px-2 py-1 rounded-lg text-xs">
                  {item.percent}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#101c35] rounded-3xl p-5">
          <div className="flex justify-between mb-6">
            <h2 className="text-xl font-bold">Low Stock Products</h2>
            <button className="text-orange-400 text-sm">View All</button>
          </div>

          <div className="space-y-4">
            {lowStock.map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt="" className="w-14 h-14 rounded-xl object-cover bg-white/10 p-1" />
                  <div>
                    <h3>{item.name}</h3>
                    <p className="text-slate-400 text-sm">Paint Product</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-orange-400 font-bold">{item.stock}</p>
                  <p className="text-slate-400 text-xs">In Stock</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#101c35] rounded-3xl p-5">
          <div className="flex justify-between mb-6">
            <h2 className="text-xl font-bold">Recent Sales</h2>
            <button className="px-3 py-1 rounded-lg bg-white/10 text-sm">Weekly</button>
          </div>

          <div className="space-y-4">
            {recentSales.map((item, i) => (
              <div key={i} className="flex items-center justify-between border-b border-white/10 pb-3">
                <div className="flex items-center gap-3">
                  <img src={item.image} alt="" className="w-14 h-14 rounded-xl object-cover bg-white/10 p-1" />
                  <div>
                    <h3>{item.product}</h3>
                    <p className="text-slate-400 text-sm">{item.amount}</p>
                  </div>
                </div>

                <span
                  className={`px-2 py-1 rounded-lg text-xs ${item.status === "Completed"
                      ? "bg-green-500/20 text-green-400"
                      : item.status === "Processing"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-red-500/20 text-red-400"
                    }`}
                >
                  {item.status}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;