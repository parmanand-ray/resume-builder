import { Check, Palette } from "lucide-react";
import React, { useState } from "react";

const ColorPicker = ({ selectedColor, onChange }) => {
  const colors = [
    { name: "Green", value: "#338826" },
    { name: "Blue", value: "#1E90FF" },
    { name: "Red", value: "#FF6347" },
    { name: "Yellow", value: "#FFD700" },
    { name: "Purple", value: "#800080" },
    { name: "Orange", value: "#FF8C00" },
    { name: "Pink", value: "#FFC0CB" },
    { name: "Teal", value: "#008080" },
    { name: "Brown", value: "#A52A2A" },
    { name: "Gray", value: "#808080" },
    { name: "Black", value: "#000000" },
    { name: "White", value: "#FFFFFF" },
    { name: "Indigo", value: "#4B0082" },
    { name: "Lime", value: "#00FF00" },
    { name: "Maroon", value: "#800000" },
    { name: "Navy", value: "#000080" },
    { name: "Olive", value: "#808000" },
    { name: "Silver", value: "#C0C0C0" },
    { name: "Aqua", value: "#00FFFF" },
    { name: "Fuchsia", value: "#FF00FF" },
    { name: "Coral", value: "#FF7F50" },
    { name: "Khaki", value: "#F0E68C" },
    { name: "Lavender", value: "#E6E6FA" },
    { name: "Salmon", value: "#FA8072" },
    { name: "Turquoise", value: "#40E0D0" },
    { name: "Wheat", value: "#F5DEB3" },
    { name: "Crimson", value: "#DC143C" },
    { name: "Cyan", value: "#00FFFF" },
    { name: "Gold", value: "#FFD700" },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-1 text-sm text-purple-600 bg-gradient-to-br from-purple-50 to-purple-100 ring-purple-300 hover:ring transition-all px-3 py-2 rounded-lg"
      >
        <Palette size={16} />
        <span className="max-sm:hidden">Accent</span>
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg p-4 z-10 w-80">
          <div className="grid grid-cols-4 gap-3">
            {colors.map((color) => (
              <div
                key={color.value}
                className="relative cursor-pointer group flex flex-col items-center"
                onClick={() => {
                  onChange(color.value);
                  setIsOpen(false);
                }}
              >
                <div
                  className="w-12 h-12 rounded-full border-2 border-gray-200 group-hover:border-black/25 transition-colors"
                  style={{ backgroundColor: color.value }}
                />

                {selectedColor === color.value && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Check
                      className={`size-5 ${
                        color.value === "#FFFFFF" ||
                        color.value === "#FFD700" ||
                        color.value === "#F5DEB3"
                          ? "text-black"
                          : "text-white"
                      }`}
                    />
                  </div>
                )}

                <p className="text-xs text-center mt-1 text-gray-600">
                  {color.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ColorPicker;
