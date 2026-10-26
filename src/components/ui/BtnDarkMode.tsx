"use client";

import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

type Theme = "corporate" | "business";

export default function BtnDarkMode() {
  const [theme, setTheme] = useState("corporate");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    const currentTheme: Theme = savedTheme === "business" ? "business" : "corporate";

    setTheme(currentTheme);
    document.documentElement.setAttribute("data-theme", currentTheme);
  }, []);

  const toggleTheme = () => {
    const newTheme: Theme = theme === "corporate" ? "business" : "corporate";

    setTheme(newTheme);

    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <button type="button" className="btn btn-circle btn-ghost" onClick={toggleTheme} aria-label={theme === "corporate" ? "Activar modo oscuro" : "Activar modo claro"}>
      {theme === "corporate" ? <Moon size={18} /> : <Sun size={18} />}
    </button>
  );
}
