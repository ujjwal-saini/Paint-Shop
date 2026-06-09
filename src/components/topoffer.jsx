import React, { useState } from "react";
import { MapPin, Truck, Headphones, Phone, MoreHorizontal, ChevronDown, } from "lucide-react";
import toast from "react-hot-toast";

function TopOffer() {
  const [location, setLocation] = useState("Select Location");
  const [openLocation, setOpenLocation] = useState(false);

  const getCurrentLocation = () => {
    setOpenLocation(false);
    if (!navigator.geolocation) {
      toast.error("Geolocation not supported");
      return;
    }


    const loadingToast = toast.loading("Fetching your location...");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        try {
          const response = await fetch(
            `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
          );
          const data = await response.json();
          const city =
            data.address.city ||
            data.address.state ||
            data.address.town ||
            "Your Location";
          console.log(city);
          const country = data.address.country || "";
          setLocation(`${city}, ${country}`);
          setOpenLocation(false);

          toast.success(`Location Updated: ${city}`,
            { id: loadingToast, });
        } catch (error) {
          console.log(error);
          toast.error(
            "Failed to fetch location",
            {
              id: loadingToast,
            }
          );
        }
      },

      () => {
        toast.error(
          "Location permission denied",
          {
            id: loadingToast,
          }
        );
      }
    );
  };

  return (
    <div className="w-full bg-[#f5f5f7] border-b border-gray-200">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        <div className="hidden md:flex items-center justify-between h-[45px] text-sm text-gray-700">
          <div className="relative">
            <button onClick={() => setOpenLocation(!openLocation)}
              className="flex items-center gap-2 hover:text-purple-600 transition">

              <MapPin size={16} className="text-orange-500" />

              <p> Delivering to:
                <span className="font-medium ml-1 text-purple-600"> {location} </span>
              </p>

              <ChevronDown size={15}
                className={`transition duration-300 ${openLocation ? "rotate-180" : ""}`} />

            </button>

            {openLocation && (
              <div className="absolute top-12 left-0 w-[250px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 z-50">
                <h3 className="font-bold text-gray-800 text-lg">
                  Select Location
                </h3>
                <p className="text-[13px] text-gray-500 mt-1 mb-4">
                  Allow access to detect your current location automatically.
                </p>
                <button
                  onClick={getCurrentLocation}
                  className="w-full bg-secondary text-white py-2 rounded-[10px] font-semibold hover:scale-[1.02] transition">
                  Use Current Location
                </button>
              </div>
            )}
          </div>

          <div className="flex items-center gap-2">
            <Truck size={16} className="text-orange-500" />
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
              <Headphones size={16} className="text-orange-500" />
              <p>Customer Support</p>
            </div>

            <div className="flex items-center gap-2">
              <Phone size={16} className="text-orange-500" />
              <p>+91 93684 77303</p>
            </div>
          </div>
        </div>

        {/* MOBILE */}
        <div className="flex md:hidden items-center justify-between py-1">
          <div className="flex items-start gap-2">
            <MapPin size={18} className="text-orange-500 mt-[2px]" />

            <div className="leading-tight text-left">
              <p className="text-[10px] font-medium text-gray-500">
                Delivering to
              </p>
              <h4 className="text-[12px] font-bold text-purple-600 mt-[2px]">
                {location}
              </h4>

            </div>

          </div>


          <div className="relative">
            <button onClick={() => setOpenLocation(!openLocation)}
              className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 transition">
              <MoreHorizontal size={22} className="text-gray-700" />
            </button>

            {/* MOBILE POPUP */}
            {openLocation && (
              <div className="absolute top-12 right-0 w-[260px] bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 z-50">
                <h3 className="text-[15px] font-bold text-gray-800">
                  Select Location
                </h3>

                <p className="text-[14px]  text-gray-500 mt-1 mb-4">
                  Enable current location access
                </p>

                <button onClick={getCurrentLocation}
                  className="w-full bg-secondary text-[14px] text-white py-[6px] rounded-2xl font-semibold">
                  Use Current Location
                </button>

              </div>

            )}

          </div>

        </div>

      </div>
    </div>
  );
}

export default TopOffer;