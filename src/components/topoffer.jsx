import React from "react";
import {
  MapPin,
  Truck,
  Headphones,
  Phone,
  MoreHorizontal,
} from "lucide-react";

function TopOffer() {
  return (
    <div className="w-full bg-[#f5f5f7] border-b border-gray-200">

      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* DESKTOP SAME AS BEFORE */}
        <div className="hidden md:flex items-center justify-between h-[45px] text-sm text-gray-700">

          {/* LEFT */}
          <div className="flex items-center gap-2">

            <MapPin
              size={16}
              className="text-orange-500"
            />

            <p>
              Delivering to:
              <span className="font-medium ml-1">
                Delhi, India
              </span>
            </p>

          </div>

          {/* CENTER */}
          <div className="flex items-center gap-2">

            <Truck
              size={16}
              className="text-orange-500"
            />

            <p>
              Free Delivery on orders above
              <span className="font-semibold ml-1">
                ₹999
              </span>
            </p>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-6">

            <div className="flex items-center gap-2">

              <Headphones
                size={16}
                className="text-orange-500"
              />

              <p>Customer Support</p>

            </div>

            <div className="flex items-center gap-2">

              <Phone
                size={16}
                className="text-orange-500"
              />

              <p>+91 12345 67890</p>

            </div>

          </div>
        </div>

        {/* MOBILE LIKE IMAGE */}
        <div className="flex md:hidden items-center justify-between py-3">

          {/* LEFT */}
          <div className="flex items-start gap-2">

            <MapPin
              size={18}
              className="text-orange-500 mt-[2px]"
            />

            <div className="leading-tight">

              <p className="text-[11px] font-medium text-gray-500">
                Delivering to
              </p>

              <h4 className="text-[14px] font-bold text-purple-600 mt-[2px]">
                Delhi, India
              </h4>

            </div>
          </div>

          {/* RIGHT */}
          <button className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition">

            <MoreHorizontal
              size={22}
              className="text-gray-700"
            />

          </button>

        </div>

      </div>
    </div>
  );
}

export default TopOffer;