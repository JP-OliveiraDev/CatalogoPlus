import { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [value, setValue] = useState("");

  
  function handleChange(e) {
    const newValue = e.target.value;
    setValue(newValue);
    onSearch(newValue);
  }

  return (
    <div className="relative w-full max-w-lg">
      <div className="flex items-center w-full bg-white/80 backdrop-blur-md rounded-full border      border-gray-200 px-4 py-2 shadow-sm 
        focus-within:ring-2 focus-within:ring-blue-600 transition-all duration-300 
        focus-within:scale-[1.02] hover:shadow-md">
        <input
          type="text"
          placeholder="Buscar produtos..."
          value={value}
          onChange={handleChange}
          className="peer flex-grow bg-transparent text-gray-800 placeholder-transparent focus:outline-none text-base px-1"
          style={{ caretColor: "#1e40af" }}
        />
        <label
          className={`absolute left-6 text-gray-500 transition-all duration-300 pointer-events-none
            ${value ? "-top-1 text-xs text-blue-700" : "top-2.5 text-sm"}`}
        >
          Buscar produtos...
        </label>
        
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-gray-600 ml-3 relative z-10"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
          />
        </svg>
      </div>
    </div>
  );
}
