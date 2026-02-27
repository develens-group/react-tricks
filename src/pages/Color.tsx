import { useState } from "react";

const ColorPicker = () => {
  const [color, setColor] = useState("");

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-6">
      
      {/* Box */}
      <div
        className="w-64 h-64 border rounded-xl transition"
        style={{ backgroundColor: color }}
      />

      {/* Input */}
      <input
        type="text"
        placeholder="Enter color (red, #000, rgb...)"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        className="border p-3 rounded-lg w-64"
      />
    </div>
  );
};

export default ColorPicker;
