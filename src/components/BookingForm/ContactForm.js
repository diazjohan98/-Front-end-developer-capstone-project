import React from "react";
import "./ContactForm.css";

const ContactForm = ({ contactData, setContactData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData({
      ...contactData,
      [name]: value,
    });
  };

  return (
    <div className="contact-form-wrapper">
      <div className="input-group">
        <label htmlFor="firstName">Nombre:</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={contactData.firstName}
          onChange={handleChange}
          required
          minLength={2}
          placeholder="Ej. Johan"
        />
      </div>

      <div className="input-group">
        <label htmlFor="lastName">Apellido:</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={contactData.lastName}
          onChange={handleChange}
          required
          minLength={2}
        />
      </div>

      <div className="input-group">
        <label htmlFor="phone">Teléfono:</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={contactData.phone}
          onChange={handleChange}
          required
          pattern="[0-9]{10}"
          title="Debe contener 10 dígitos numéricos"
        />
      </div>

      <div className="input-group">
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={contactData.email}
          onChange={handleChange}
          required
        />
      </div>
    </div>
  );
};

export default ContactForm;
