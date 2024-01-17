import React, { useState, useEffect } from "react";

export const DarkMode = () => {
  // State to track the current dark mode status
  const [isDarkMode, setIsDarkMode] = useState(
    () => localStorage.getItem("dark-mode") === "true"
  );

  // useEffect to update the DOM and local storage when dark mode changes
  useEffect(() => {
    const root = document.documentElement;
    // Add or remove the 'dark-theme' class based on the current dark mode status
    if (isDarkMode) {
      root.classList.add("dark-theme");
    } else {
      root.classList.remove("dark-theme");
    }
    // Update local storage with the current dark mode status
    localStorage.setItem("dark-mode", isDarkMode);
  }, [isDarkMode]); // Run this effect when isDarkMode changes

  const toggleDarkMode = () => {
    // Update the state with the opposite of the current mode
    setIsDarkMode((prevMode) => !prevMode);
  };

  return (
    // Button to toggle dark mode, displaying dynamic text based on current mode
    <button className="btn-dark-mode" onClick={toggleDarkMode}>
      {isDarkMode ? "Light Mode" : "Dark Mode"}
    </button>
  );
};
