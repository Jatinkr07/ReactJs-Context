import { useState } from "react";
import { LuSunDim, LuMoonStar } from "react-icons/lu";

const Toggler = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const togglerDark = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div
      className={`min-h-screen flex items-center justify-center  transition-all duration-300 ${
        isDarkMode ? "bg-gray-950 text-white " : "bg-gray-50 text-black"
      }`}
    >
      <button
        onClick={togglerDark}
        className="p-3 rounded-full bg-gray-800 text-yellow-300 hover:scale-110 transition-transform duration-200"
      >
        {isDarkMode ? (
          <LuSunDim className="w-12 h-12" />
        ) : (
          <LuMoonStar className="w-12 h-12" />
        )}
      </button>
    </div>
  );
};

export default Toggler;
