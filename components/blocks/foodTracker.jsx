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
              className={`w-full text-left p-3 border rounded ${
                foodData[meal]?.checked ? "bg-zinc-900 text-white" : "bg-white"
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
  
            {/* Show the select dropdown if the checkbox is checked */}
            {foodData[meal]?.checked && (
              <div className="mt-2">
                <label className="block mb-1">Amount</label>
                <select
                  value={foodData[meal]?.amount || "None"}
                  onChange={(e) => onFoodChange(meal, "amount", e.target.value)}
                  className="border p-2 w-full"
                >
                  <option value="None">None</option>
                  <option value="All">All</option>
                  <option value="Most">Most</option>
                  <option value="Some">Some</option>
                </select>
              </div>
            )}
          </div>
        ))}
        <button></button>
      </div>
    );
  }
  