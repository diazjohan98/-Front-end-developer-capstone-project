import React, { useReducer } from "react";
import BookingForm from "./BookingForm/BookingForm";

const Main = () => {
  // Aquí pondremos la lógica de useReducer para las horas más tarde
  return (
    <main>
      <h1>Reserve a Table</h1>
      <BookingForm />
    </main>
  );
};

export default Main;
