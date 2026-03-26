import React, { useReducer } from "react";
import BookingForm from "./BookingForm/BookingForm";
import { fetchAPI } from "../utils/api";

export const initializeTimes = () => {
  return fetchAPI(new Date()); // Ya no dependemos de window
};

export const updateTimes = (state, action) => {
  switch (action.type) {
    case "UPDATE_TIMES":
      return fetchAPI(action.payload); // Usamos la API local con la nueva fecha
    default:
      return state;
  }
};

const Main = () => {
  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    [],
    initializeTimes,
  );

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: "var(--bg-dark)",
        paddingBottom: "50px",
      }}
    >
      <BookingForm availableTimes={availableTimes} dispatch={dispatch} />
    </main>
  );
};

export default Main;
