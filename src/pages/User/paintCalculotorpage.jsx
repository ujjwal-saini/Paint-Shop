import React from "react";
import PaintCalculatorLayout from "../../components/paint-calculator/paintCalculatorLayout";
import AreaCalculation from "../../components/paint-calculator/areaCalculation";

function PaintCalculotorpage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="bg-white rounded-3xl  lg:px-2 shadow-sm">
        <PaintCalculatorLayout />
      </div>
      <AreaCalculation />
    </div>
  );
}

export default PaintCalculotorpage;