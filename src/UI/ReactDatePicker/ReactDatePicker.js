import React, {useState, useEffect} from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import ru from 'date-fns/locale/ru';
import {addDays} from "date-fns"
import "react-datepicker/dist/react-datepicker.css";

registerLocale('ru', ru);

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

const ReactDatePicker = ({getDate}) => {

   const [startDate, setStartDate] = useState(addDays(new Date(), 1));

   useEffect(() => {
      getDate(startDate)
   }, [])

   // const excludeTimes = () => {
   //
   //    let array = [];
   //
   //    for (let i = 0; i < 8; i++) {
   //       array.push(setHours(setMinutes(new Date(), 0), i));
   //       array.push(setHours(setMinutes(new Date(), 30), i))
   //    }
   //    return array;
   // };

   return (
       <DatePicker
           selected={startDate}
           minDate={addDays(new Date(), 1)}
           maxDate={addDays(new Date(), 20)}
           locale="ru"
           // showTimeSelect
           dateFormat="Pp"
           // timeIntervals="60"
           inline
           // excludeTimes={[
           //     ...excludeTimes(),
           //    setHours(setMinutes(new Date(), 0), 23),
           // ]}
           onChange={date => {
              if(date < new Date()) {
                 setStartDate(addDays(new Date(), 1));
                 getDate(addDays(new Date(), 1))
              } else {
                 setStartDate(date);
                 getDate(date)
              }
           }}
           // showDisabledMonthNavigation
       />
   )
};

export default ReactDatePicker