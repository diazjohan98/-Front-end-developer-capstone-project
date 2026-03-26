import React, { useState } from "react";
import GuestCounter from "./GuestCounter";
import TimePicker from "./TimePicker";

const BookingForm = () => {
  const [guests, setGuests] = useState(2);

  const [selectedTime, setSelectedTime] = useState("");

  const availableTimes = ["18:00", "19:00", "20:00", "21:00"];

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
      }}
    >
      <TimePicker
        availableTimes={availableTimes}
        selectedTime={selectedTime}
        setSelectedTime={setSelectedTime}
      />

      <GuestCounter guests={guests} setGuests={setGuests} />
    </form>
  );
};

export default BookingForm;
