import React from "react";
import Darkmode from "darkmode-js";
import { useState, useEffect } from "react";
import { Moon, Sun } from "react-bootstrap-icons";
function YourComponent() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const darkmode = new Darkmode();
  useEffect(() => {
    darkmode.showWidget();
  }, []);
  const handleDarkModeToggle = () => {
    darkmode.toggle();
    isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true);
  };

  return (
    <div>
      {/* Your component content */}
      <button id="your-darkmode-button-id" onClick={handleDarkModeToggle}>
        {isDarkMode ? <Sun /> : <Moon />}
      </button>
    </div>
  );
}

export default YourComponent;
