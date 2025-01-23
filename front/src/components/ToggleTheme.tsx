import { useEffect, useState } from "react";

function ToggleTheme() {
  const [darkMode, setDarkMode] = useState(false);
  
  useEffect(() => {
    const savedMode = localStorage.getItem("theme");
    if (savedMode === "dark") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    } else {
      setDarkMode(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };

  return (
    <button
      className={`flex items-center w-[45px] py-[1px] rounded-[20px] text-[20px] 
            ${darkMode ? "justify-end bg-[#4c4eaf]" : "justify-start bg-[#fff]"}`}
      onClick={toggleTheme}
    >
      <div>{darkMode ? "🌙" : "☀️"}</div>
    </button>
  );
}

export default ToggleTheme;
