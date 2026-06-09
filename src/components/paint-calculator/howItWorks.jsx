import {
  Paintbrush,
  Calculator,
  CheckCircle,
} from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Paintbrush,
      title: "Select Surface",
    },
    {
      icon: Calculator,
      title: "Enter Dimensions",
    },
    {
      icon: CheckCircle,
      title: "Get Result",
    },
  ];

  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm">

      <h3 className="font-bold text-lg mb-5">
        How It Works
      </h3>

      <div className="space-y-4">

        {steps.map((step, i) => {
          const Icon = step.icon;

          return (
            <div
              key={i}
              className="flex gap-4 items-center"
            >
              <div className="w-10 h-10 rounded-xl bg-violet-100 flex items-center justify-center">
                <Icon
                  size={18}
                  className="text-violet-600"
                />
              </div>

              <span>
                {step.title}
              </span>
            </div>
          );
        })}

      </div>
    </div>
  );
}