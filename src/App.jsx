import React, { useState } from "react";
import Header from "./Header";
import CompanyForm from "./CompanyForm";
import Footer from "./Footer";
import "./App.css";

function App() {
  const [language, setLanguage] = useState("uz");

  const handleLanguageChange = (selectedLanguage) => {
    setLanguage(selectedLanguage);
  };

  return (
    <div className="app">
      <Header language={language} onLanguageChange={handleLanguageChange} />
      <div className="content">
        <CompanyForm />
      </div>
      <Footer />
    </div>
  );
}

export default App;
