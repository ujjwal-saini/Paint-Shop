import React from "react";
// import { Facebook, Instagram, Twitter, Youtube, Mail, Phone, MapPin, } from "lucide-react";

function Fotter() {
  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-6 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <h2 className="text-3xl font-bold mb-4">
              Color<span className="text-blue-500">Shop</span>
            </h2>

            <p className="text-gray-400 leading-7">
              Premium quality paints for interiors & exteriors.
            </p>

            <div className="flex gap-4 mt-6">
              <div className="bg-white/10 p-3 rounded-xl hover:bg-blue-600 transition cursor-pointer">
                {/* <Facebook size={18} /> */}
              </div>

              <div className="bg-white/10 p-3 rounded-xl hover:bg-pink-600 transition cursor-pointer">
                {/* <Instagram size={18} /> */}
              </div>

              <div className="bg-white/10 p-3 rounded-xl hover:bg-sky-500 transition cursor-pointer">
                {/* <Twitter size={18} /> */}
              </div>

              <div className="bg-white/10 p-3 rounded-xl hover:bg-red-600 transition cursor-pointer">
                {/* <Youtube size={18} /> */}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">
                Home
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Shop
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Brands
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Offers
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">Categories</h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-white transition cursor-pointer">
                Interior Paints
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Exterior Paints
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Waterproofing
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Wood Finishes
              </li>

              <li className="hover:text-white transition cursor-pointer">
                Tools & Accessories
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-5">Contact</h3>

            <div className="space-y-4 text-gray-400">
              <div className="flex items-center gap-3">
                {/* <MapPin size={18} className="text-blue-500" /> */}
                <p>Mumbai, India</p>
              </div>

              <div className="flex items-center gap-3">
                {/* <Phone size={18} className="text-blue-500" /> */}
                <p>+91 98765 43210</p>
              </div>

              <div className="flex items-center gap-3">
                {/* <Mail size={18} className="text-blue-500" /> */}
                <p>support@colorshop.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-400 text-sm">
            © 2026 ColorShop. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-400">
            <p className="hover:text-white transition cursor-pointer">
              Privacy
            </p>

            <p className="hover:text-white transition cursor-pointer">
              Terms
            </p>

            <p className="hover:text-white transition cursor-pointer">
              Refund
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Fotter;