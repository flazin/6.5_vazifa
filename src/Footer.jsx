import React from "react";
import "./Footer.css";

function Footer() {
  const handleReset = () => {
    // Логика для сброса формы
  };

  const handleSubmit = () => {
    alert("Siznig kompaniyangiz royhatda otdi!!!");
  };

  return (
    <footer>
      <button onClick={handleReset}>Orqaga</button>
      <button onClick={handleSubmit}>Yuklash</button>
    </footer>
  );
}

export default Footer;
