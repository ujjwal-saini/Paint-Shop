export default function ResultCard() {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm">

      <h3 className="font-semibold">
        Estimated Paint
      </h3>

      <div className="mt-4">
        <h1 className="text-5xl font-bold text-purple-600">
          1.5
        </h1>

        <p>Litres</p>
      </div>

      <div className="mt-5 border-t pt-4">
        Primer Required: 0.75L
      </div>

    </div>
  );
}