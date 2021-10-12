
import React,{useState} from 'react';
import DatePicker from 'react-datepicker'



export const Startdate = () => {
    const [startDate, setStartDate] = useState(null);
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        disabledKeyboardNavigation
        placeholderText="Check-In"
      />
    );
  };

export const Enddate = () => {
    const [endDate, setEndDate] = useState(null);
    return (
      <DatePicker
        selected={endDate}
        onChange={(date) => setEndDate(date)}
        disabledKeyboardNavigation
        placeholderText="Check-Out"
      />
    );
  };