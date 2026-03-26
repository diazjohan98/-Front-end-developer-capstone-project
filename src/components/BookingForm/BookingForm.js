import React, { useState, useEffect } from "react";
import GuestCounter from "./GuestCounter";
import TimePicker from "./TimePicker";
import DatePicker from "./DatePicker";
import ContactForm from "./ContactForm";
import { submitAPI } from "../../utils/api";
import "./BookingForm.css";

const BookingForm = ({ availableTimes, dispatch }) => {
  const [step, setStep] = useState(1);

  const [date, setDate] = useState(new Date());
  const [guests, setGuests] = useState(2);
  const [contactData, setContactData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
  });
  const [selectedTime, setSelectedTime] = useState("");

  useEffect(() => {
    dispatch({ type: "UPDATE_TIMES", payload: date });
    setSelectedTime("");
  }, [date, dispatch]);

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!selectedTime) {
      alert("Por favor seleccione una hora.");
      return;
    }
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      date,
      time: selectedTime,
      guests,
      ...contactData,
    };

    if (submitAPI(formData)) {
      setStep(3);
    } else {
      alert("Hubo un error al procesar la reserva.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form-container">
      {/* --- PASO 1 --- */}
      {step === 1 && (
        <div className="form-step fade-in">
          <DatePicker date={date} setDate={setDate} />
          <TimePicker
            availableTimes={availableTimes}
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
          />

          <GuestCounter guests={guests} setGuests={setGuests} />
          <button
            type="button"
            className="btn-primary"
            onClick={handleNextStep}
            disabled={!selectedTime}
          >
            Continue
          </button>
        </div>
      )}

      {/* --- PASO 2 --- */}
      {step === 2 && (
        <div className="form-step slide-in">
          <div className="back-header">
            <button type="button" className="btn-back" onClick={handlePrevStep}>
              ←
            </button>
          </div>

          <ContactForm
            contactData={contactData}
            setContactData={setContactData}
          />
          <button
            type="submit"
            className="btn-primary"
            style={{ marginTop: "40px" }}
          >
            Confirmar mi mesa
          </button>
        </div>
      )}

      {/* --- PASO 3 --- */}
      {step === 3 && (
        <div className="form-step fade-in success-modal">
          <div className="check-circle">✓</div>
          <h2 style={{ color: "var(--text-light)", marginTop: "20px" }}>
            ¡Reserva Confirmada!
          </h2>

          <div className="success-details">
            <p>
              <strong>A nombre de:</strong> {contactData.firstName}{" "}
              {contactData.lastName}
            </p>
            <p>
              <strong>Fecha:</strong> {date.toLocaleDateString()}
            </p>
            <p>
              <strong>Hora:</strong> {selectedTime}
            </p>
            <p>
              <strong>Comensales:</strong> {guests}
            </p>
          </div>

          <button
            type="button"
            className="btn-primary"
            style={{ marginTop: "30px" }}
            onClick={() => window.location.reload()} // Recarga para hacer otra reserva
          >
            Hacer nueva reserva
          </button>
        </div>
      )}
    </form>
  );
};

export default BookingForm;
