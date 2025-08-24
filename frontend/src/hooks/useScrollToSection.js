// src/hooks/useScrollToSection.js
import { useNavigate, useLocation } from "react-router-dom";

export const useScrollToSection = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (id) => {
    if (location.pathname !== "/") {
      // If not on homepage → navigate first
      navigate("/", { state: { scrollTo: id } });
    } else {
      // If already on homepage → just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return scrollToSection;
};
