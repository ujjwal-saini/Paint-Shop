import React from "react";
import { ArrowLeft, Edit, Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router-dom";
function UserDetails() {
  return (
    <div className="p-6 min-h-screen bg-slate-950 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <Link to={'/dashboard/users'} className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700">
          <ArrowLeft size={18} />
          Back
        </Link>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-700">
          <Edit size={18} />
          Edit Customer
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Left Card */}
        <div className="bg-slate-900 rounded-2xl h-[80vh] overflow-hidden border border-slate-800">
          <img src="https://i.pravatar.cc/150?img=12" className="h-32 w-full items-center" />

          <div className="relative px-6 pb-6">
            <div className="-mt-12 flex justify-center">
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="user"
                className="w-24 h-24 rounded-full border-4 border-slate-900"
              />
            </div>

            <div className="text-center mt-4">
              <h2 className="text-2xl font-bold">Rahul Sharma</h2>
              <p className="text-slate-400">Premium Customer</p>

              <span className="inline-block mt-3 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-sm">
                Active Customer
              </span>
            </div>

            <div className="mt-6 space-y-3">
              <div className="bg-slate-800 rounded-lg p-4 flex justify-between">
                <span>Email</span>
                <span>rahul@gmail.com</span>
              </div>

              <div className="bg-slate-800 rounded-lg p-4 flex justify-between">
                <span>Phone</span>
                <span>+91 9876543210</span>
              </div>

              <div className="bg-slate-800 rounded-lg p-4 flex justify-between">
                <span>City</span>
                <span>Dehradun</span>
              </div>

              <div className="bg-slate-800 rounded-lg p-4 flex justify-between">
                <span>Customer Since</span>
                <span>2024</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Overview */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">
                Customer Overview
              </h2>

              <button className="px-4 py-2 bg-blue-600 rounded-lg">
                Edit
              </button>
            </div>

            <div className="grid md:grid-cols-3 gap-4">
              <div className="bg-slate-800 p-5 rounded-xl">
                <p className="text-slate-400">Total Orders</p>
                <h3 className="text-3xl font-bold mt-2">24</h3>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <p className="text-slate-400">Total Spent</p>
                <h3 className="text-3xl font-bold mt-2">
                  ₹32,500
                </h3>
              </div>

              <div className="bg-slate-800 p-5 rounded-xl">
                <p className="text-slate-400">Pending Amount</p>
                <h3 className="text-3xl font-bold mt-2 text-yellow-400">
                  ₹2,500
                </h3>
              </div>
            </div>
          </div>

          {/* Recent Orders */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Recent Orders
            </h2>

            <div className="space-y-4">
              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-semibold">
                  Asian Paints Royale
                </h3>
                <p className="text-slate-400">
                  Ordered 20 Litre
                </p>
                <p className="text-green-400">₹4,500</p>
              </div>

              <div className="border-b border-slate-800 pb-4">
                <h3 className="font-semibold">
                  Berger Weather Coat
                </h3>
                <p className="text-slate-400">
                  Ordered 10 Litre
                </p>
                <p className="text-green-400">₹3,200</p>
              </div>

              <div>
                <h3 className="font-semibold">
                  Nerolac Beauty Gold
                </h3>
                <p className="text-slate-400">
                  Ordered 15 Litre
                </p>
                <p className="text-green-400">₹5,100</p>
              </div>
            </div>
          </div>

          {/* Customer Activity */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
            <h2 className="text-2xl font-semibold mb-6">
              Recent Activity
            </h2>

            <div className="space-y-5">
              <div>
                <p className="font-medium">
                  Purchased Asian Paints Royale
                </p>
                <p className="text-slate-400 text-sm">
                  2 days ago
                </p>
              </div>

              <div>
                <p className="font-medium">
                  Payment Received ₹4,500
                </p>
                <p className="text-slate-400 text-sm">
                  5 days ago
                </p>
              </div>

              <div>
                <p className="font-medium">
                  Account Created
                </p>
                <p className="text-slate-400 text-sm">
                  Jan 2024
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  );
}

export default UserDetails;