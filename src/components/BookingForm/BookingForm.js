import React, { useState } from "react";
import GuestCounter from "./GuestCounter";
import TimePicker from "./TimePicker";
import DatePicker from "./DatePicker";
import ContactForm from "./ContactForm";
import "./BookingForm.css";

const BookingForm = () => {
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

  const availableTimes = ["18:00", "19:00", "20:00", "21:00"];

  const handleNextStep = (e) => {
    e.preventDefault();
    if (!selectedTime) {
      alert("Por favor seleccione una hora antes de continuar");
      return;
    }
    setStep(2);
  };

  const handlePrevStep = () => {
    setStep(1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Reserva enviada:", { date, selectedTime, guests });
  };

  return (
    <form onSubmit={handleSubmit} className="booking-form-container">
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
    </form>
  );
};

export default BookingForm;
