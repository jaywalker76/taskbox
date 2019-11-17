import React from "react";

import { createUseStyles } from "react-jss";

const useStyles = createUseStyles({
  outerContainer: {
    width: 500
  },
  calendarContainer: {
    width: "100%",
    background: "red"
  }
});

class Calendar extends React.Component {
  render() {
    const locale = "en-US";
    const mondayDate = new Date(Date.UTC(2017, 0, 2));
    // const sundayDate = new Date(Date.UTC(2017, 0, 2));

    const getCurrentDate = () => {
      const today = new Date();
      return (
        today.getFullYear() +
        "-" +
        (today.getMonth() + 1) +
        "-" +
        today.getDate()
      );
    };

    const getDaysInMonth = (month, year) => {
      return new Date(year, month, 0).getDate();
    };

    const getNameOfDay = (dateString, locale) => {
      const date = new Date(dateString);
      return date.toLocaleDateString(locale, { weekday: "long" });
    };

    const getDaysOfWeekNames = locale => {
      let weekDays = [];
      for (let i = 0; i < 7; i++) {
        weekDays.push(
          mondayDate.toLocaleDateString(locale, { weekday: "short" })
        );
        mondayDate.setDate(mondayDate.getDate() + 1);
      }
      return weekDays;
    };

    let weekdayshortname = getDaysOfWeekNames("en-US").map(day => {
      return (
        <th key={day} className="week-day">
          {day}
        </th>
      );
    });

    //const classes = useStyles();

    return (
      <div>
        <h2>Calendar</h2>
        {getCurrentDate()}
        <table>
          <tbody>
            <tr>
              {weekdayshortname}
            </tr>
          </tbody>
        </table>


      </div>
    );
  }
}

/*
const Calendar = props => {


  const locale = "en-US";
  const mondayDate = new Date(Date.UTC(2017, 0, 2));
  // const sundayDate = new Date(Date.UTC(2017, 0, 2));

  const getCurrentDate = () => {
    const today = new Date();
    return today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
  }

  const getDaysInMonth = (month, year) => {
    return new Date(year, month, 0).getDate();
  }

  const getNameOfDay = (dateString, locale) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(locale, { weekday: 'long' });
  }

  const getDaysOfWeekNames = (locale) => {
    let weekDays = [];
    for(let i = 0; i < 7; i++){
      weekDays.push(mondayDate.toLocaleDateString(locale, {weekday: 'short'}));
      mondayDate.setDate(mondayDate.getDate() + 1);
    }
    return weekDays
  }

  let weekHeader = document.createElement("tr");

  const generateHeader = () => {
    let row = document.createElement("tr");

    let daysInWeek = getDaysOfWeekNames("en-US");

    for(let day in daysInWeek){
      let cell = document.createElement("td");
      let cellText = document.createTextNode("");
      cell.appendChild(day);
      row.appendChild(cell);
    }
    weekHeader.appendChild(row);
  }

  return (
    <div className={classes.outerContainer}>
      <div className={classes.calendarContainer}>
        <table className={classes.calendar} role="presentation">
          <tbody>
            <tr role="presentation">
            </tr>
          </tbody>
        </table>
        {getCurrentDate()}
        <br />
        {getDaysInMonth(11,2019)}
      </div>
    </div>

  );
}
*/
export default Calendar;
