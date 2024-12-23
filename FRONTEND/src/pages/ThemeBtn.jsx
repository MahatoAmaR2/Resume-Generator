import { CiLight } from "react-icons/ci";
// import { MdDarkMode } from "react-icons/md";
import { CiDark } from "react-icons/ci";
import { useTheme } from "../contexts/ThemeContext";
import { useEffect } from "react";

function ThemeBtn() {
  const { theme, toggleTheme } = useTheme();

  // Function to handle theme change
  const handleThemeToggle = () => {
    toggleTheme();
  };

  //Update the class of the html element when the theme changes
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
    
  }, [theme]);
  return (
    <>
      <div>
        {theme === "light" ? (
          <div className="hover:bg-gray-400 p-1 rounded-md">
          <CiLight
            onClick={handleThemeToggle}
            className="cursor-pointer text-2xl"
          /></div>
        ) : (
          <CiDark
            onClick={handleThemeToggle}
            className="cursor-pointer text-2xl"
          />
        )}
      </div>
    </>
  );
}

export default ThemeBtn;
