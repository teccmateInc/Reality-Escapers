
import React,{useState} from 'react';
import DatePicker from 'react-datepicker'



export const InputDate = ({className,placeholder}) => {
    const [startDate, setStartDate] = useState(null);
    return (
      <DatePicker
        selected={startDate}
        onChange={(date) => setStartDate(date)}
        disabledKeyboardNavigation
        placeholderText={`${placeholder}`}
        className={className}
      />
    );
  };
