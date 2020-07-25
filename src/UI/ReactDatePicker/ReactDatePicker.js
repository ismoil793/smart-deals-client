import React, {useState} from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import ru from 'date-fns/locale/ru';
import {addDays, setHours, setMinutes} from "date-fns"
import "react-datepicker/dist/react-datepicker.css";

registerLocale('ru', ru);

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ReactDatePicker = () => {

   const [startDate, setStartDate] = useState(setMinutes(new Date(), 60));

   const excludeTimes = () => {

      let array = [];

      for (let i = 0; i < 8; i++) {
         array.push(setHours(setMinutes(new Date(), 0), i));
         array.push(setHours(setMinutes(new Date(), 30), i))
      }
      return array;
   };

   return (
       <DatePicker
           selected={startDate}
           minDate={new Date()}
           maxDate={addDays(new Date(), 20)}
           locale="ru"
           showTimeSelect
           dateFormat="Pp"
           timeIntervals="60"
           excludeTimes={[
               ...excludeTimes(),
              setHours(setMinutes(new Date(), 0), 23),
           ]}
           onChange={date => {
              date < new Date() ? setStartDate(setMinutes(new Date(), 60)) : setStartDate(date)
           }}
           // showDisabledMonthNavigation
       />
   )
};

export default ReactDatePicker