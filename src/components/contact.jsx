import React from "react";
import { Phone, Mail, MapPin, Clock3, Send, MessageCircle, Navigation, } from "lucide-react";

function Contact() {
  return (
    <div className="bg-[#f5f7fb] min-h-screen overflow-hidden">

      <section className="relative bg-gradient-to-r from-[#312E81] via-[#5B21B6] to-[#7C3AED] text-white overflow-hidden">

        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500/30 blur-3xl rounded-full"></div>

        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 py-16 md:py-24 relative z-10">

          <div className="grid lg:grid-cols-2 gap-14 items-center">

            <div className="text-center lg:text-left">

              <p className="uppercase tracking-[4px] text-sm text-indigo-200 mb-4">
                Get In Touch
              </p>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Contact Our <br />
                Paint Experts
              </h1>

              <p className="mt-6 text-base sm:text-lg text-gray-200 max-w-2xl mx-auto lg:mx-0 leading-8">
                Need help choosing paints, shades, or products?
                Our team is always ready to help you.
              </p>

              <a
                href="https://maps.app.goo.gl/kxAi26rAg69gJ62S7"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 mt-8 bg-white text-[#4F46E5] px-8 py-3 rounded-full font-semibold hover:scale-105 duration-300 shadow-xl"
              >
                <Navigation size={20} />
                Get Directions
              </a>

            </div>

            <div className="flex justify-center">

              <div className="bg-white/10 border border-white/20 backdrop-blur-2xl rounded-[40px] p-10 shadow-2xl">

                <MessageCircle
                  size={130}
                  className="text-white"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">

        <div className="grid lg:grid-cols-2 gap-10">

          <div className="bg-white rounded-[35px] shadow-2xl p-6 sm:p-8">

            <h2 className="text-3xl font-bold text-gray-800">
              Send Message
            </h2>

            <p className="text-gray-500 mt-3">
              Fill the form and our team will contact you soon.
            </p>

            <div className="mt-8 space-y-5">

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Full Name
                </label>

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Email Address
                </label>

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Phone Number
                </label>

                <input
                  type="text"
                  placeholder="Enter your phone number"
                  className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500"
                />
              </div>

              <div>
                <label className="text-sm font-semibold text-gray-700">
                  Message
                </label>

                <textarea
                  rows="5"
                  placeholder="Write your message..."
                  className="w-full mt-2 bg-gray-50 border border-gray-200 rounded-2xl px-5 py-4 outline-none focus:border-indigo-500 resize-none"
                ></textarea>
              </div>

              <button className="w-full bg-[#4F46E5] hover:bg-[#4338CA] text-white py-4 rounded-2xl font-semibold text-lg transition duration-300 flex items-center justify-center gap-3">

                <Send size={20} />

                Send Message

              </button>

            </div>

          </div>

          <div className="space-y-6">

            <div className="bg-white rounded-[35px] shadow-2xl p-6 sm:p-8 flex gap-5">

              <div className="w-16 h-16 rounded-2xl bg-indigo-100 flex items-center justify-center shrink-0">

                <Phone className="text-indigo-600" />

              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Phone Number
                </h3>

                <a
                  href="tel:+919368477303"
                  className="text-gray-600 mt-3 leading-7 block hover:text-indigo-600"
                >
                  +91 9368477303
                </a>
              </div>

            </div>

            <div className="bg-white rounded-[35px] shadow-2xl p-6 sm:p-8 flex gap-5">

              <div className="w-16 h-16 rounded-2xl bg-pink-100 flex items-center justify-center shrink-0">

                <Mail className="text-pink-600" />

              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Email Address
                </h3>

                <a
                  href="mailto:support@paintstore.com"
                  className="text-gray-600 mt-3 leading-7 block hover:text-pink-600"
                >
                  support@paintstore.com
                </a>
              </div>

            </div>

            <div className="bg-white rounded-[35px] shadow-2xl p-6 sm:p-8">

              <div className="flex gap-5">

                <div className="w-16 h-16 rounded-2xl bg-green-100 flex items-center justify-center shrink-0">

                  <MapPin className="text-green-600" />

                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800">
                    Store Location
                  </h3>

                  <p className="text-gray-600 mt-3 leading-7">
                    Tap below to open Google Maps and start navigation directly.
                  </p>

                  <a
                    href="https://maps.app.goo.gl/kxAi26rAg69gJ62S7"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 mt-5 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-2xl font-semibold transition duration-300"
                  >
                    <Navigation size={20} />
                    Open Google Maps
                  </a>

                </div>

              </div>

            </div>

            <div className="bg-white rounded-[35px] shadow-2xl overflow-hidden">

              <iframe
                src="https://maps.google.com/maps?q=Shamli&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-[300px] border-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="map"
              ></iframe>

            </div>

            <div className="bg-white rounded-[35px] shadow-2xl p-6 sm:p-8 flex gap-5">

              <div className="w-16 h-16 rounded-2xl bg-orange-100 flex items-center justify-center shrink-0">

                <Clock3 className="text-orange-500" />

              </div>

              <div>
                <h3 className="text-2xl font-bold text-gray-800">
                  Working Hours
                </h3>

                <p className="text-gray-600 mt-3 leading-7">
                  Mon - Sat : 9:00 AM - 8:00 PM
                </p>
              </div>

            </div>

          </div>

        </div>

      </section>

      <section className="bg-black text-white py-16 md:py-20 px-5 mt-10">

        <div className="max-w-5xl mx-auto text-center">

          <h2 className="text-3xl sm:text-4xl font-bold">
            Let’s Build Your Dream Home
          </h2>

          <p className="mt-5 text-gray-300 text-base sm:text-lg max-w-2xl mx-auto">
            Get premium paints, expert guidance,
            and modern color solutions for your interiors.
          </p>

          <a
            href="https://maps.app.goo.gl/kxAi26rAg69gJ62S7"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 mt-8 bg-[#4F46E5] hover:bg-[#4338CA] transition duration-300 px-8 py-4 rounded-full font-semibold text-lg shadow-lg"
          >
            <Navigation size={22} />
            Visit Our Store
          </a>

        </div>

      </section>

    </div>
  );
}

export default Contact;