import { ThemeContext } from "@/contexts/ThemeContext";
import { useContext } from "react";

export const Detail = () => {
  const { theme, lang } = useContext(ThemeContext);
  return (
    <p className="text-center" style={{ color: theme.fgColor }}>
      {theme.name === "dark"
        ? lang.detail.darkActivated
        : lang.detail.lightActivated}
      {/* tip: Get information from "theme" variable to determine 
      which theme is currently selected */}
    </p>
  );
};
