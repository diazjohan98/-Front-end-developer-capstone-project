import "@testing-library/jest-dom"; //
import { render, screen } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "../Main";

jest.mock("./DatePicker", () => {
  return function DummyDatePicker() {
    return (
      <div data-testid="mock-date-picker">Calendario Falso para el Test</div>
    );
  };
});

test("Renders the Comensales label in BookingForm", () => {
  const mockAvailableTimes = ["18:00", "19:00"];
  const mockDispatch = jest.fn();

  render(
    <BookingForm availableTimes={mockAvailableTimes} dispatch={mockDispatch} />,
  );

  const labelElement = screen.getByText(/Comensales:/i);
  expect(labelElement).toBeInTheDocument();
});

test("initializeTimes returns a non-empty array of times", () => {
  const times = initializeTimes();
  expect(times.length).toBeGreaterThan(0);
});

test("updateTimes returns an array of times when action is UPDATE_TIMES", () => {
  const initialState = ["17:00", "18:00"];
  const action = { type: "UPDATE_TIMES", payload: new Date() };

  const newState = updateTimes(initialState, action);
  expect(newState.length).toBeGreaterThan(0);
});

test("updateTimes returns the same state for unknown action", () => {
  const initialState = ["17:00", "18:00"];
  const action = { type: "UNKNOWN_ACTION" };

  const newState = updateTimes(initialState, action);
  expect(newState).toEqual(initialState);
});
