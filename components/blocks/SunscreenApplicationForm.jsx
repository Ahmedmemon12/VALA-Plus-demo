export function SunscreenApplicationForm({ sunscreenTime, onTimeChange }) {
    return (
        <div className="mb-4">
            <label className="block">Sunscreen Application Time</label>
            <input
                type="time"
                value={sunscreenTime}
                onChange={(e) => onTimeChange(e.target.value)}
                className="border p-2"
            />
        </div>
    );
}
