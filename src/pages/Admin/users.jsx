import React from "react";
import { Link } from "react-router-dom";
const customers = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@gmail.com",
    orders: 12,
    totalSpent: "₹8,500",
    status: "Active",
  },
  {
    id: 2,
    name: "Aman Verma",
    email: "aman@gmail.com",
    orders: 5,
    totalSpent: "₹3,200",
    status: "Inactive",
  },
  {
    id: 3,
    name: "Priya Singh",
    email: "priya@gmail.com",
    orders: 18,
    totalSpent: "₹15,400",
    status: "Active",
  },
];

function Users() {
  return (
    <div className="p-6 text-white">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div>
          <p className="text-blue-400 uppercase text-sm">Management</p>
          <h1 className="text-3xl font-bold">Customers</h1>
          <p className="text-gray-400">
            Manage your paint shop customers
          </p>
        </div>

        <button className="bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700">
          + Add Customer
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-slate-800 p-5 rounded-xl">
          <h3 className="text-gray-400">Total Customers</h3>
          <p className="text-3xl font-bold mt-2">1,245</p>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl">
          <h3 className="text-gray-400">Active Customers</h3>
          <p className="text-3xl font-bold mt-2 text-green-400">1,120</p>
        </div>

        <div className="bg-slate-800 p-5 rounded-xl">
          <h3 className="text-gray-400">New This Month</h3>
          <p className="text-3xl font-bold mt-2 text-blue-400">125</p>
        </div>
      </div>

      {/* Customer Table */}
      <div className="bg-slate-800 rounded-xl p-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">Customer List</h2>

          <input
            type="text"
            placeholder="Search customer..."
            className="bg-slate-700 px-4 py-2 rounded-lg outline-none"
          />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-slate-700 text-left">
                <th className="py-3">Customer</th>
                <th>Orders</th>
                <th>Total Spent</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {customers.map((customer) => (
                <tr
                  key={customer.id}
                  className="border-b border-slate-700"
                >
                  <td className="py-4">
                    <div>
                      <p className="font-medium">{customer.name}</p>
                      <p className="text-gray-400 text-sm">
                        {customer.email}
                      </p>
                    </div>
                  </td>

                  <td>{customer.orders}</td>
                  <td>{customer.totalSpent}</td>

                  <td>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${customer.status === "Active"
                        ? "bg-green-500/20 text-green-400"
                        : "bg-red-500/20 text-red-400"
                        }`}
                    >
                      {customer.status}
                    </span>
                  </td>

                  <td>
                    <Link to={`${customer.id}`} className="bg-blue-600 px-3 py-1 rounded-lg">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Users;