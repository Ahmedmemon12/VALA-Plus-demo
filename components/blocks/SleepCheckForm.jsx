export function SleepCheckForm({ sleepCheckData, onSleepCheck }) {
    return (
      <div className="mb-4">
        <label className="block">Sleep Check Time</label>
        <input
          type="time"
          value={sleepCheckData.time}
          onChange={(e) => onSleepCheck('time', e.target.value)}
          className="border p-2"
        />
        
        <div className="mt-2">
          <label className="block">Check Interval</label>
          <select
            value={sleepCheckData.interval}
            onChange={(e) => onSleepCheck('interval', e.target.value)}
            className="border p-2"
          >
            <option value="10">10 Minutes (Medical/Allergy Needs)</option>
            <option value="20">20 Minutes</option>
          </select>
        </div>
      </div>
    );
  }
  