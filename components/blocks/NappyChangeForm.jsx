export function NappyChangeForm({ onChange, nappyData }) {
    return (
      <div className="mb-4">
        <label className="block">Nappy Status</label>
        <div className="flex space-x-2">
          {['Wet', 'Soiled', 'Dry'].map((status) => (
            <button
              key={status}
              onClick={() => onChange('nappyStatus', status)}
              className={`border p-2 ${nappyData.status === status ? 'bg-blue-600 text-white' : ''}`}
            >
              {status}
            </button>
          ))}
        </div>
  
        <div className="mt-2">
          <label className="block">Diaper Cream</label>
          <input
            type="checkbox"
            checked={nappyData.diaperCream}
            onChange={(e) => onChange('diaperCream', e.target.checked)}
            className="mr-2"
          />
          Yes
        </div>
  
        <div className="mt-2">
          <label className="block">Quantity</label>
          <select
            value={nappyData.quantity}
            onChange={(e) => onChange('quantity', e.target.value)}
            className="border p-2"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>
      </div>
    );
  }
  