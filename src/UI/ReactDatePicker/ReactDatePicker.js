import React, {Component} from "react";
import DatePicker, {registerLocale} from "react-datepicker";
import ru from 'date-fns/locale/ru';
import {addDays} from "date-fns"
import "react-datepicker/dist/react-datepicker.css";

registerLocale('ru', ru);

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

class ReactDatePicker extends Component {

   state = {
      startDate: addDays(new Date(), 1)
   };

   componentDidMount() {
      this.props.getDate(this.state.startDate)
   }

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

   render() {

      return (
          <div className="notranslate">
             <DatePicker
                 selected={this.state.startDate}
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
                    // if(date !== this.state.startDate) {
                    if (date < new Date()) {
                       this.setState({startDate: addDays(new Date(), 1)});
                       this.props.getDate(addDays(new Date(), 1))
                    } else {
                       this.setState({startDate: date});
                       this.props.getDate(date)
                    }
                    // }
                 }}
                 // showDisabledMonthNavigation
             />
          </div>
      )
   }
}

export default ReactDatePicker
