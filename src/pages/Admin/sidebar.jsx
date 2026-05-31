import React, { useState } from "react";
import { LayoutDashboard, Package, ShoppingCart, Users, BarChart3, Settings, PaintBucket, LogOut, X } from "lucide-react";
import { Link } from "react-router-dom";
function Sidebar({ opensidebar, setopensidebar }) {
  const [IndexActive, setIndexActive] = useState("");

  const menu = [
    { path: "/dashboard", icon: <LayoutDashboard size={20} />, name: "Dashboard" },
    { path: "products", icon: <Package size={20} />, name: "Products" },
    { path: "orders", icon: <ShoppingCart size={20} />, name: "Orders" },
    { path: "users", icon: <Users size={20} />, name: "Users" },
    { path: "paintshades", icon: <PaintBucket size={20} />, name: "Paint Shades" },
    { path: "analytics", icon: <BarChart3 size={20} />, name: "Analytics" },
    { path: "settings", icon: <Settings size={20} />, name: "Settings" }];



  return (
    <aside className={`${opensidebar ? "translate-x-0" : "-translate-x-full"} text-white bg-[#050c19] lg:translate-x-0 fixed left-0 top-0 w-72 h-screen transition-all duration-300 z-50`}>
      <div className="h-20 pl-6 flex items-center gap-3 border-b border-white/10">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-xl">S</div>
        <div>
          <h2 className="font-bold text-xl">
            Saini Paint
          </h2>
          <p className="text-xs text-slate-400">
            Admin Panel
          </p>
        </div>
        <button
          onClick={() => setopensidebar(false)}
          className="lg:hidden w-9 h-9 ml-8 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center cursor-pointer">
          <X size={20} />
        </button>

      </div>
      <div className="flex-1 p-4 space-y-3">
        {menu.map((item, i) =>
          <Link to={`${item.path}`} onClick={() => { setIndexActive(i) }} key={i} className={`w-full flex items-center gap-4 px-5 py-4 rounded-2xl transition-all ${i === IndexActive ? "bg-[#13233f]" : "hover:bg-[#13233f]"}`}>
            <span className="text-blue-400">
              {item.icon}
            </span>
            <span className="font-medium">
              {item.name}
            </span>
          </Link>)}
      </div>
      <div className="p-4 border-t border-white/10">
        <button className="w-full flex items-center gap-4 px-5 py-4 rounded-2xl hover:bg-red-500/10 text-red-400">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  )
}

export default Sidebar;