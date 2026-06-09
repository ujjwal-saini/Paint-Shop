import React from "react";
import PaintCalculatorLayout from "../../components/paint-calculator/paintCalculatorLayout";
import AreaCalculation from "../../components/paint-calculator/areaCalculation";

function PaintCalculotorpage() {
  return (
    <div className="bg-slate-50 lg:min-h-screen">
      <div className="bg-white rounded-3xl  lg:px-2 shadow-sm">
        <PaintCalculatorLayout />
      </div>
      <div className="hidden lg:block">
        <AreaCalculation />
      </div>

    </div>
  );
}

export default PaintCalculotorpage;