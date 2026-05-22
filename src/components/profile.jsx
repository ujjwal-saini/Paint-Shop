import React from "react";
import {
  User, Mail, Phone, MapPin, ShoppingBag, Heart, LogOut, Settings, ShieldCheck, Truck, Star, CreditCard, Bell, Pencil, Package, Wallet,
  BadgeCheck, PaintBucket
} from "lucide-react";

function Profile() {
  return (
    <div className="bg-[#f5f7fb] min-h-screen overflow-hidden">

      <section className="relative overflow-hidden bg-gradient-to-r from-[#312E81] via-[#5B21B6] to-[#7C3AED] text-white">

        <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-pink-500/20 rounded-full blur-3xl"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 sm:py-16 lg:py-20 relative z-10">

          <div className="flex flex-col lg:flex-row items-center gap-8">

            <div className="relative">

              <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white/10 border border-white/20 backdrop-blur-xl flex items-center justify-center shadow-2xl">

                <User size={70} className="text-white" />

              </div>

              <button className="absolute bottom-2 right-2 w-12 h-12 rounded-full bg-white text-[#4F46E5] flex items-center justify-center shadow-xl">

                <Pencil size={18} />

              </button>

            </div>

            <div className="text-center lg:text-left">

              <p className="uppercase tracking-[3px] text-indigo-200 text-sm mb-3">
                Welcome Back
              </p>

              <h1 className="text-3xl sm:text-5xl font-bold">
                Ujjwal Saini
              </h1>

              <p className="mt-4 text-gray-200 text-sm sm:text-lg leading-7">
                Manage your profile, orders, wishlist,
                addresses, and account settings.
              </p>

              <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 mt-6">

                <div className="bg-white/10 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-xl flex items-center gap-3">

                  <BadgeCheck size={18} />

                  Verified Account

                </div>

                <div className="bg-white/10 border border-white/10 px-5 py-3 rounded-2xl backdrop-blur-xl flex items-center gap-3">

                  <ShoppingBag size={18} />

                  12 Orders

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">

        <div className="grid lg:grid-cols-4 gap-6">

          <div className="lg:col-span-1 hidden lg:block">

            <div className="bg-white rounded-[30px] shadow-xl p-6 sticky top-24">

              <div className="space-y-4">

                <button className="w-full flex items-center gap-4 bg-indigo-600 text-white px-5 py-4 rounded-2xl font-semibold">

                  <User size={20} />

                  My Profile

                </button>

                <button className="w-full flex items-center gap-4 text-gray-700 hover:bg-gray-100 px-5 py-4 rounded-2xl transition">

                  <ShoppingBag size={20} />

                  My Orders

                </button>

                <button className="w-full flex items-center gap-4 text-gray-700 hover:bg-gray-100 px-5 py-4 rounded-2xl transition">

                  <Heart size={20} />

                  Wishlist

                </button>

                <button className="w-full flex items-center gap-4 text-gray-700 hover:bg-gray-100 px-5 py-4 rounded-2xl transition">

                  <MapPin size={20} />

                  Saved Address

                </button>

                <button className="w-full flex items-center gap-4 text-gray-700 hover:bg-gray-100 px-5 py-4 rounded-2xl transition">

                  <Wallet size={20} />

                  Wallet

                </button>

                <button className="w-full flex items-center gap-4 text-gray-700 hover:bg-gray-100 px-5 py-4 rounded-2xl transition">

                  <Bell size={20} />

                  Notifications

                </button>

                <button className="w-full flex items-center gap-4 text-gray-700 hover:bg-gray-100 px-5 py-4 rounded-2xl transition">

                  <Settings size={20} />

                  Settings

                </button>

                <button className="w-full flex items-center gap-4 text-red-500 hover:bg-red-50 px-5 py-4 rounded-2xl transition">

                  <LogOut size={20} />

                  Logout

                </button>

              </div>

            </div>

          </div>

          <div className="lg:col-span-3 space-y-6">

            <div className="bg-white rounded-[30px] shadow-xl p-6 sm:p-8">

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Personal Information
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Manage your account details
                  </p>
                </div>

                <button className="bg-[#111827] hover:bg-black text-white px-6 py-3 rounded-2xl font-semibold transition">
                  Edit Profile
                </button>

              </div>

              <div className="grid sm:grid-cols-2 gap-5 mt-8">

                <div className="bg-gray-50 rounded-2xl p-5">

                  <div className="flex items-center gap-3 text-indigo-600 mb-3">

                    <User size={20} />

                    <p className="font-semibold">
                      Full Name
                    </p>

                  </div>

                  <h3 className="text-lg font-bold text-gray-800">
                    Ujjwal Saini
                  </h3>

                </div>

                <div className="bg-gray-50 rounded-2xl p-5">

                  <div className="flex items-center gap-3 text-pink-600 mb-3">

                    <Mail size={20} />

                    <p className="font-semibold">
                      Email Address
                    </p>

                  </div>

                  <h3 className="text-lg font-bold text-gray-800 break-all">
                    ujjwalsaini073@gmail.com
                  </h3>

                </div>

                <div className="bg-gray-50 rounded-2xl p-5">

                  <div className="flex items-center gap-3 text-green-600 mb-3">

                    <Phone size={20} />

                    <p className="font-semibold">
                      Phone Number
                    </p>

                  </div>

                  <h3 className="text-lg font-bold text-gray-800">
                    +91 9368477303
                  </h3>

                </div>

                <div className="bg-gray-50 rounded-2xl p-5">

                  <div className="flex items-center gap-3 text-orange-500 mb-3">

                    <MapPin size={20} />

                    <p className="font-semibold">
                      Location
                    </p>

                  </div>

                  <h3 className="text-lg font-bold text-gray-800">
                    Shamli, Uttar Pradesh
                  </h3>

                </div>

              </div>

            </div>

            <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-5">

              <div className="bg-white rounded-[30px] shadow-xl p-6">

                <div className="w-14 h-14 rounded-2xl bg-indigo-100 flex items-center justify-center mb-5">

                  <ShoppingBag className="text-indigo-600" />

                </div>

                <h2 className="text-3xl font-bold text-gray-800">
                  12
                </h2>

                <p className="text-gray-500 mt-2">
                  Total Orders
                </p>

              </div>

              <div className="bg-white rounded-[30px] shadow-xl p-6">

                <div className="w-14 h-14 rounded-2xl bg-pink-100 flex items-center justify-center mb-5">

                  <Heart className="text-pink-600" />

                </div>

                <h2 className="text-3xl font-bold text-gray-800">
                  8
                </h2>

                <p className="text-gray-500 mt-2">
                  Wishlist Items
                </p>

              </div>

              <div className="bg-white rounded-[30px] shadow-xl p-6">

                <div className="w-14 h-14 rounded-2xl bg-green-100 flex items-center justify-center mb-5">

                  <Truck className="text-green-600" />

                </div>

                <h2 className="text-3xl font-bold text-gray-800">
                  3
                </h2>

                <p className="text-gray-500 mt-2">
                  Orders In Delivery
                </p>

              </div>

              <div className="bg-white rounded-[30px] shadow-xl p-6">

                <div className="w-14 h-14 rounded-2xl bg-yellow-100 flex items-center justify-center mb-5">

                  <Star className="text-yellow-500" />

                </div>

                <h2 className="text-3xl font-bold text-gray-800">
                  4.9
                </h2>

                <p className="text-gray-500 mt-2">
                  Customer Rating
                </p>

              </div>

            </div>

            <div className="bg-white rounded-[30px] shadow-xl p-6 sm:p-8">

              <div className="flex items-center justify-between mb-8">

                <div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">
                    Recent Orders
                  </h2>

                  <p className="text-gray-500 mt-2">
                    Track your latest purchases
                  </p>
                </div>

                <button className="text-indigo-600 font-semibold">
                  View All
                </button>

              </div>

              <div className="space-y-5">

                <div className="border border-gray-100 rounded-3xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center">

                      <Package className="text-indigo-600" />

                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Premium Wall Paint
                      </h3>

                      <p className="text-gray-500 mt-1">
                        Order ID : #PAINT1024
                      </p>
                    </div>

                  </div>

                  <div className="flex flex-wrap items-center gap-4">

                    <div className="bg-green-100 text-green-700 px-5 py-2 rounded-full text-sm font-semibold">
                      Delivered
                    </div>

                    <div className="font-bold text-gray-800">
                      ₹499
                    </div>

                  </div>

                </div>

                <div className="border border-gray-100 rounded-3xl p-5 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">

                  <div className="flex items-center gap-5">

                    <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center">

                      <PaintBucket className="text-pink-600" />

                    </div>

                    <div>
                      <h3 className="text-lg font-bold text-gray-800">
                        Waterproof Coating
                      </h3>

                      <p className="text-gray-500 mt-1">
                        Order ID : #PAINT2048
                      </p>
                    </div>

                  </div>

                  <div className="flex flex-wrap items-center gap-4">

                    <div className="bg-yellow-100 text-yellow-700 px-5 py-2 rounded-full text-sm font-semibold">
                      Shipping
                    </div>

                    <div className="font-bold text-gray-800">
                      ₹899
                    </div>

                  </div>

                </div>

              </div>

            </div>

            <div className="bg-gradient-to-r from-[#111827] to-[#1F2937] rounded-[35px] p-8 sm:p-10 text-white overflow-hidden relative">

              <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl"></div>

              <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">

                <div>

                  <p className="uppercase tracking-[3px] text-indigo-300 text-sm mb-4">
                    Premium Membership
                  </p>

                  <h2 className="text-3xl sm:text-4xl font-bold leading-tight">
                    Get Extra Discounts <br />
                    On Every Order
                  </h2>

                  <p className="mt-5 text-gray-300 leading-8">
                    Unlock exclusive deals, faster delivery,
                    and premium support benefits.
                  </p>

                </div>

                <button className="bg-[#4F46E5] hover:bg-[#4338CA] transition duration-300 px-8 py-4 rounded-full font-semibold text-lg shadow-lg flex items-center gap-3">

                  <CreditCard size={22} />

                  Upgrade Now

                </button>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
}

export default Profile;