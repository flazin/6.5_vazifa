import React, { useState } from "react";
import "./CompanyForm.css";

function CompanyForm() {
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [country, setCountry] = useState("");
  const [location, setLocation] = useState("");
  const [employeeCount, setEmployeeCount] = useState("");
  const [comment, setComment] = useState("");

  return (
    <div className="company-form">
      <div className="company-info">
        <h1>Kompaniya ma'lumotlari</h1>
        <input className="input" type="text" />

        <h2>Email..</h2>
        <input className="input" type="text" />
        <h2>Telefon raqam...</h2>
        <input className="input" type="text" />
        <h2 className="links">linklar...</h2>
        <img src="./public/discord_5968898.png" alt="" />
        <img src="./public/facebook_1051309.png" alt="" />
        <img src="./public/telegram_2111710.png" alt="" />
        <img src="./public/instagram_1384015 (1).png" alt="" />

        <h2>Davlat</h2>
        <input className="input" type="text" />

        <h2>Hodimlar soni..</h2>
        <input className="input" type="text" />

        <h2>Izoh</h2>
        <input className="Izoh" type="text" />
      </div>
    </div>
  );
}

export default CompanyForm;
