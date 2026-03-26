import React from "react";
import "./TimePicker.css";

const TimePicker = ({ availableTimes, selectedTime, setSelectedTime }) => {
  const handleTimeClick = (e, time) => {
    e.preventDefault(); // Evita recargar la página
    setSelectedTime(time);
  };

  return (
    <div className="time-picker-wrapper">
      <label className="time-label">Seleccione hora:</label>

      <div className="time-grid">
        {availableTimes.map((time) => (
          <button
            key={time}
            // Si la hora actual del map es la misma que la seleccionada, le ponemos una clase extra "selected"
            className={`time-btn ${selectedTime === time ? "selected" : ""}`}
            onClick={(e) => handleTimeClick(e, time)}
            aria-label={`Seleccionar hora ${time}`}
            aria-pressed={selectedTime === time}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimePicker;
