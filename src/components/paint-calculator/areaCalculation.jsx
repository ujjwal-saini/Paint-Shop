export default function AreaCalculation() {
  const formulas = [
    {
      name: "Wall",
      formula:
        "2 × (Length + Width) × Height",
    },
    {
      name: "Door",
      formula:
        "Width × Height × Qty × 2",
    },
    {
      name: "Gate",
      formula:
        "Width × Height × 2",
    },
    {
      name: "Window",
      formula:
        "Width × Height × Qty × 2",
    },
    {
      name: "Boundary",
      formula:
        "Length × Height × 2",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm mt-10">

      <h2 className="text-3xl font-bold text-center mb-8">
        Area Calculation Formula
      </h2>

      <div className="grid md:grid-cols-5 gap-4">

        {formulas.map((item) => (
          <div
            key={item.name}
            className="border rounded-2xl p-5 text-center"
          >
            <h3 className="font-bold mb-2">
              {item.name}
            </h3>

            <p className="text-sm text-slate-500">
              {item.formula}
            </p>
          </div>
        ))}

      </div>
    </div>
  );
}