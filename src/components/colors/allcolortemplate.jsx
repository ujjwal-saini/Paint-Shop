import React from "react";
import colors from '../../json/colorshade.json'
function AllColorTemplate() {
  console.log(colors);

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4">
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold">
            All Color Templates
          </h1>

          <p className="text-gray-500 mt-3">
            Browse trending wall paint colors for your room
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {colors.map((item) => (
            <div
              key={item.name}
              className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300"
            >
              <div
                className="h-40"
                style={{
                  backgroundColor: item.color,
                }}
              />

              <div className="p-4">
                <h3 className="font-semibold">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  {item.color}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}

export default AllColorTemplate;