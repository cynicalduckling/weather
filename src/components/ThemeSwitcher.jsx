import { useState, useEffect } from "react";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";

const ThemeSwitcher = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme")?.length
      ? localStorage.getItem("theme")
      : "dark"
  );

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [theme]);

  const handleClick = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="cursor-pointer" onClick={handleClick}>
      {theme === "dark" ? (
        <MdDarkMode className="h-10 w-10 hover:animate-pulse" />
      ) : (
        <MdOutlineLightMode className="h-10 w-10 hover:animate-pulse" />
      )}
    </div>
  );
};

export default ThemeSwitcher;
