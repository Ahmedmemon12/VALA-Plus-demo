export function FoodTrackingComponent({ foodData, onFoodChange }) {
  return (
    <div>
      <label className="block mb-4 text-lg font-bold">Food Intake</label>
      {["Breakfast", "Lunch", "Dinner"].map((meal, index) => (
        <div key={index} className="mb-4">
          <button
            type="button"
            onClick={() =>
              onFoodChange(meal, "checked", !foodData[meal]?.checked)
            }
            className={`w-full text-left p-3 border rounded ${foodData[meal]?.checked ? "bg-zinc-900 text-white" : "bg-white"
              }`}
          >
            <input
              type="checkbox"
              checked={foodData[meal]?.checked || false}
              onChange={() =>
                onFoodChange(meal, "checked", !foodData[meal]?.checked)
              }
              className="mr-2"
            />
            {meal}
          </button>

          {/* Show the buttons instead of select dropdown if the checkbox is checked */}
          {foodData[meal]?.checked && (
            <div className="mt-2">
              <div className="flex gap-2 py-3">
                {["None", "All", "Most", "Some"].map((amount) => (
                  <button
                    key={amount}
                    onClick={() =>
                      onFoodChange(meal, "amount", amount)
                    }
                    className={`px-4 py-2 border rounded ${foodData[meal]?.amount === amount
                        ? "bg-zinc-600 text-white"
                        : "bg-white"
                      }`}
                  >
                    {amount}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
