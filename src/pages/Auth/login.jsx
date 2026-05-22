import React, { useState } from "react";
import {
  X,
  Mail,
  Lock,
  Eye,
  EyeOff,
} from "lucide-react";

function Login({ closeModal, openSignup }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">

      <div className="relative w-full max-w-[420px] bg-white rounded-[30px] shadow-2xl overflow-hidden">

        <button
          onClick={closeModal}
          className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/20 hover:bg-white/30 backdrop-blur-md transition flex items-center justify-center text-white z-20"
        >
          <X size={18} />
        </button>

        <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 px-6 pt-8 pb-14 text-white">

          <h1 className="text-3xl font-bold">
            Welcome Back
          </h1>

          <p className="mt-2 text-sm text-white/80 leading-6">
            Login to continue shopping
          </p>

        </div>

        <div className="px-5 pb-5 -mt-8 relative z-20">

          <div className="bg-white rounded-[25px] shadow-xl p-5">

            <div className="space-y-4">

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <div className="mt-2 flex items-center bg-gray-100 rounded-2xl px-4">

                  <Mail className="text-gray-500" size={18} />

                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full bg-transparent px-3 py-3 outline-none text-sm"
                  />

                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Password
                </label>

                <div className="mt-2 flex items-center bg-gray-100 rounded-2xl px-4">

                  <Lock className="text-gray-500" size={18} />

                  <input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter password"
                    className="w-full bg-transparent px-3 py-3 outline-none text-sm"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-500"
                  >
                    {showPassword ? (
                      <EyeOff size={18} />
                    ) : (
                      <Eye size={18} />
                    )}
                  </button>

                </div>
              </div>

              <div className="flex justify-end">
                <button className="text-sm text-indigo-600 font-medium">
                  Forgot Password?
                </button>
              </div>

              <button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-2xl font-semibold transition duration-300 hover:opacity-90">
                Login Now
              </button>

            </div>

            <p className="text-center text-sm text-gray-500 mt-5">
              Don’t have an account?

              <button onClick={openSignup} className="text-indigo-600 font-semibold ml-1">
                Sign Up
              </button>
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;