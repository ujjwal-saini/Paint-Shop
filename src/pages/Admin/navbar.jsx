import React from "react";
import { Menu, Bell, Search } from "lucide-react";

function Navbar({ opensidebar, setopensidebar }) {




  return (
    <div className="fixed h-20 w-full lg:w-[calc(100%-288px)] bg-[#0d1b34] border-b border-white/10 flex items-center justify-between px-6">
      <div className="flex items-center gap-4">
        <button onClick={() => setopensidebar(!opensidebar)}
          className="lg:hidden w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-white">
          <Menu size={22} />
        </button>
        <div className="relative hidden lg:block">
          <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" />
          <input type="text" placeholder="Search products, orders, customers" className="w-[500px] h-12 bg-[#101f3c] border border-white/10 rounded-xl pl-11 pr-4 outline-none text-white placeholder:text-slate-400" />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button className="w-12 h-12 rounded-xl border border-white/10 flex items-center justify-center text-white"><Bell size={20} /></button>
        <div className="flex items-center gap-3 bg-[#101f3c] border border-white/10 rounded-xl px-3 py-2">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center font-semibold text-black">SP</div>
          <div>
            <h3 className="text-white text-sm font-semibold">Saini Paint</h3>
            <p className="text-slate-400 text-xs">Admin</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;