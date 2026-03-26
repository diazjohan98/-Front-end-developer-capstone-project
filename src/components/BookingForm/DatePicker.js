import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./DatePicker.css";

const DatePicker = ({ date, setDate }) => {
  return (
    <div className="date-picker-wrapper">
      <Calendar
        onChange={setDate}
        value={date}
        minDate={new Date()}
        className="custom-calendar"
        locale="en-US"
      />
    </div>
  );
};

export default DatePicker;
