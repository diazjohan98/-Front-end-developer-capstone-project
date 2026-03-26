import React from "react";
import "./GuestCounter.css"; // Crearemos este archivito en el siguiente paso

const GuestCounter = ({ guests, setGuests }) => {
  // Funciones para sumar y restar
  const handleDecrease = (e) => {
    e.preventDefault(); // Evita que el formulario se envíe por accidente al hacer clic
    if (guests > 1) {
      setGuests(guests - 1);
    }
  };

  const handleIncrease = (e) => {
    e.preventDefault();
    if (guests < 10) {
      // Límite máximo de comensales (Meta suele pedir 10)
      setGuests(guests + 1);
    }
  };

  return (
    <div className="guest-counter-wrapper">
      <label className="guest-label">Comensales:</label>

      <div className="counter-controls">
        <button
          className="circle-btn"
          onClick={handleDecrease}
          aria-label="Disminuir comensales"
        >
          -
        </button>

        <span className="guest-number">{guests}</span>

        <button
          className="circle-btn"
          onClick={handleIncrease}
          aria-label="Aumentar comensales"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default GuestCounter;
