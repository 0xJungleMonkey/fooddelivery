import React from "react";
import Darkmode from "darkmode-js";
function YourComponent() {
  const darkmode = new Darkmode();
  const handleDarkModeToggle = () => {
    darkmode.toggle();
  };

  return (
    <div>
      {/* Your component content */}
      <button id="your-darkmode-button-id" onClick={handleDarkModeToggle}>
        Toggle Dark Mode
      </button>
    </div>
  );
}

export default YourComponent;
