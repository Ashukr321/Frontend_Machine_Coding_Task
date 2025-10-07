
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useContext } from 'react';
import { ThemeContext } from "../context/TheamContext";






const ToggleTheme = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <>

      <button onClick={toggleTheme} style={{ width: "40px", height: "40px", fontSize: "20px", borderRadius: "100%", border: "none", outline: "none", position: "absolute", top: "10px", right: "10px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        {theme === "light" ? (<MdDarkMode />) : (<CiLight />)}
      </button>
    </>
  )
}

export default ToggleTheme
