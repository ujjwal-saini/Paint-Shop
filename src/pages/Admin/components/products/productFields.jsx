import React from "react";

function ProductFields({ category }) {
  return (
    <div className="bg-slate-900 rounded-xl p-5 border border-slate-800">
      <h2 className="text-xl font-semibold text-blue-400 mb-4">
        Product Details
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {(category === "Paint" ||
          category === "Primer" ||
          category === "Texture" ||
          category === "Enamel Paint") && (
            <>
              <input
                placeholder="Color Name"
                className="bg-slate-800 p-3 rounded-lg"
              />

              <select className="bg-slate-800 p-3 rounded-lg">
                <option>200ml</option>
                <option>500ml</option>
                <option>1L</option>
                <option>4L</option>
                <option>10L</option>
                <option>20L</option>
              </select>

              <select className="bg-slate-800 p-3 rounded-lg">
                <option>Matte</option>
                <option>Glossy</option>
                <option>Satin</option>
              </select>

              <input
                placeholder="Coverage Area"
                className="bg-slate-800 p-3 rounded-lg"
              />

              <input
                placeholder="Drying Time"
                className="bg-slate-800 p-3 rounded-lg"
              />
            </>
          )}

        {category === "Brush" && (
          <>
            <select className="bg-slate-800 p-3 rounded-lg">
              <option>0.5 Inch</option>
              <option>1 Inch</option>
              <option>2 Inch</option>
              <option>3 Inch</option>
              <option>4 Inch</option>
              <option>5 Inch</option>
              <option>6 Inch</option>
            </select>

            <input
              placeholder="Brush Material"
              className="bg-slate-800 p-3 rounded-lg"
            />

            <input
              placeholder="Handle Type"
              className="bg-slate-800 p-3 rounded-lg"
            />
          </>
        )}

        {category === "Roller" && (
          <>
            <select className="bg-slate-800 p-3 rounded-lg">
              <option>4 Inch</option>
              <option>7 Inch</option>
              <option>9 Inch</option>
              <option>12 Inch</option>
              <option>18 Inch</option>
            </select>

            <input
              placeholder="Roller Type"
              className="bg-slate-800 p-3 rounded-lg"
            />

            <input
              placeholder="Frame Material"
              className="bg-slate-800 p-3 rounded-lg"
            />
          </>
        )}

        {category === "Putty" && (
          <>
            <select className="bg-slate-800 p-3 rounded-lg">
              <option>1 Kg</option>
              <option>5 Kg</option>
              <option>10 Kg</option>
              <option>20 Kg</option>
              <option>40 Kg</option>
            </select>

            <input
              placeholder="Coverage Area"
              className="bg-slate-800 p-3 rounded-lg"
            />
          </>
        )}

        {category === "Sand Paper" && (
          <>
            <select className="bg-slate-800 p-3 rounded-lg">
              <option>80 Grit</option>
              <option>100 Grit</option>
              <option>120 Grit</option>
              <option>220 Grit</option>
              <option>400 Grit</option>
              <option>600 Grit</option>
            </select>

            <input
              placeholder="Sheet Size"
              className="bg-slate-800 p-3 rounded-lg"
            />
          </>
        )}

        {category === "Fevicol" && (
          <>
            <select className="bg-slate-800 p-3 rounded-lg">
              <option>50ml</option>
              <option>100ml</option>
              <option>500ml</option>
              <option>1L</option>
              <option>5L</option>
              <option>20L</option>
            </select>

            <input
              placeholder="Application Type"
              className="bg-slate-800 p-3 rounded-lg"
            />
          </>
        )}

        {category === "Scraper" && (
          <>
            <select className="bg-slate-800 p-3 rounded-lg">
              <option>2 Inch</option>
              <option>4 Inch</option>
              <option>6 Inch</option>
              <option>8 Inch</option>
            </select>

            <select className="bg-slate-800 p-3 rounded-lg">
              <option>Iron</option>
              <option>Steel</option>
              <option>Stainless Steel</option>
            </select>
          </>
        )}

        {category === "Putty Knife" && (
          <>
            <select className="bg-slate-800 p-3 rounded-lg">
              <option>2 Inch</option>
              <option>4 Inch</option>
              <option>6 Inch</option>
              <option>8 Inch</option>
            </select>

            <select className="bg-slate-800 p-3 rounded-lg">
              <option>Iron</option>
              <option>Steel</option>
              <option>Stainless Steel</option>
            </select>
          </>
        )}

        {(category === "Wood Polish" ||
          category === "Thinner" ||
          category === "Turpentine") && (
            <>
              <select className="bg-slate-800 p-3 rounded-lg">
                <option>250ml</option>
                <option>500ml</option>
                <option>1L</option>
                <option>5L</option>
                <option>20L</option>
              </select>

              <input
                placeholder="Usage"
                className="bg-slate-800 p-3 rounded-lg"
              />
            </>
          )}

        {category === "Safety Equipment" && (
          <>
            <select className="bg-slate-800 p-3 rounded-lg">
              <option>Gloves</option>
              <option>Mask</option>
              <option>Helmet</option>
              <option>Safety Glasses</option>
            </select>

            <input
              placeholder="Size"
              className="bg-slate-800 p-3 rounded-lg"
            />
          </>
        )}
      </div>
    </div>
  );
}

export default ProductFields;