import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './Calendario.css';

function Calendario() {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  return (
    <div className="calendario-container">
      <h2>Agendar Tareas</h2>
      <Calendar
        onChange={handleDateChange}
        value={date}
      />
      <p>Fecha seleccionada: {date.toLocaleDateString()}</p>
    </div>
  );
}

export default Calendario;
