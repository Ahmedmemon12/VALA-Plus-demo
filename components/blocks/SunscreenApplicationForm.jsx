export function SunscreenApplicationForm({ onTimeChange }) {
    const handleApplySunscreen = () => {
      const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      console.log(`Sunscreen applied at ${currentTime}`);
      onTimeChange(currentTime);
    };
  
    return (
      <div className="mb-4">
        <button
          onClick={handleApplySunscreen}
          className="bg-zinc-900 text-white px-4 py-2 rounded hover:bg-zinc-700"
        >
          Apply Sunscreen
        </button>
      </div>
    );
  }
  