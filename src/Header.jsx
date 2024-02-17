import React from "react";
import "./Header.css";

function Header({ language, onLanguageChange }) {
  return (
    <header className="header">
      <div className="nav-buttons">
        <a>Vakansiyalar</a>
        <a>Kandidatlar</a>
        <a>Kompaniyalar</a>
        <a>Xizmatlar</a>

        <a>Ta’lim</a>
      </div>
      <div className="language-selector">
        <a
          onClick={() => onLanguageChange("uz")}
          className={language === "uz" ? "active" : ""}
        >
          O'zbek
        </a>
        <br />
        <br />
        <a
          onClick={() => onLanguageChange("ru")}
          className={language === "ru" ? "active" : ""}
        >
          Русский
        </a>
      </div>
      <button className="blue-button">Boshlash</button>
    </header>
  );
}

export default Header;
