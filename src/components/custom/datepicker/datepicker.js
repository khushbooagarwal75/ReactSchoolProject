import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function DateRangeSelector() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleStartDateChange = (date) => {
    setStartDate(date);
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
  };

  return (
    <div>
      <h2>Select Date Range</h2>
      <div>
        <label>From:</label>
        <DatePicker selected={startDate} onChange={handleStartDateChange} />
      </div>
      <div>
        <label>To:</label>
        <DatePicker selected={endDate} onChange={handleEndDateChange} />
      </div>
    </div>
  );
}

export default DateRangeSelector;
