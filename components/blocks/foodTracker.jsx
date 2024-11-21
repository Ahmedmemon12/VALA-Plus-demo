export function FoodTrackingComponent({ foodData, onFoodChange }) {
    return (
        <div>
            <label className="block">Food Intake</label>
            {["Morning Tea", "Lunch", "Afternoon Tea"].map((meal, index) => (
                <div key={index} className="mb-2">
                    <label className="block">{meal}</label>
                    <input
                        type="text"
                        placeholder="Food description"
                        value={foodData[meal]?.description || ''}
                        onChange={(e) => onFoodChange(meal, 'description', e.target.value)}
                        className="w-full border rounded p-2"
                    />
                    <div className="mt-2">
                        <label>Amount</label>
                        <select
                            value={foodData[meal]?.amount || 'None'}
                            onChange={(e) => onFoodChange(meal, 'amount', e.target.value)}
                            className="border p-2 w-full"
                        >
                            <option value="None">None</option>
                            <option value="All">All</option>
                            <option value="Most">Most</option>
                            <option value="Some">Some</option>
                        </select>
                    </div>
                </div>
            ))}
        </div>
    );
}
