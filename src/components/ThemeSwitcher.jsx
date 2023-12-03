import { useState, useEffect } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="" onClick={handleClick}>
      {theme === "dark" ? (
        <MdDarkMode className="h-10 w-10" />
      ) : (
        <MdOutlineLightMode className="h-10 w-10" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
