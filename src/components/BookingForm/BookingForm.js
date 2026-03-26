import React, { useState } from "react";
import GuestCounter from "./GuestCounter"; // Importamos el contador verde que hicimos

const BookingForm = () => {
  const [guests, setGuests] = useState(2);

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        paddingTop: "40px",
      }}
    >
      <GuestCounter guests={guests} setGuests={setGuests} />
    </form>
  );
};

export default BookingForm;
