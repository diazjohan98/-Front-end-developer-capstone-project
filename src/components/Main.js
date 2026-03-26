import React from "react";
import BookingForm from "./BookingForm/BookingForm"; // 🟢 Ruta actualizada

const Main = () => {
  return (
    <main style={{ minHeight: "100vh", backgroundColor: "var(--bg-dark)" }}>
      <BookingForm />
    </main>
  );
};

export default Main;
