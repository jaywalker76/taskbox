import React from "react";
import injectSheet from "react-jss";

import styling from "./styles";

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    // Don't call this.setState() here!
    // set current date
    this.state = { currentDate: new Date() };
    // this.handleClick = this.handleClick.bind(this);
  }

  render() {
    const locale = "en-US";
    const dateLength = "narrow";
    const mondayDate = new Date(Date.UTC(2017, 0, 2));

    const { currentDate } = this.state;
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
        weekDays[i] = {
          initialForm: mondayDate.toLocaleDateString(locale, {
            weekday: "narrow"
          }),
          shortForm: mondayDate.toLocaleDateString(locale, {
            weekday: "short"
          }),
          longForm: mondayDate.toLocaleDateString(locale, { weekday: "long" })
        };
        mondayDate.setDate(mondayDate.getDate() + 1);
      }
      return weekDays;
    };

    let weekdayshortname = getDaysOfWeekNames("en-US").map(day => {
      return (
        <th
          key={day.shortForm}
          scope="col"
          role="presentation"
          className="week-day"
        >
          {day.initialForm}
        </th>
      );
    });

    return (
      <div className={styling.outerContainer}>
        <h2>Calendar</h2>
        <div style={styling.calendar}>
          <div>{currentDate.getDate()}</div>
          <table style={styling.calendarContainer}>
            <tbody style={styling.tbodyStyling}>
              <tr>{currentDate.getFullYear()}</tr>
              <tr>
                {currentDate.toLocaleString("default", { month: "long" })}
              </tr>
              <tr style={styling.da}>{weekdayshortname}</tr>
            </tbody>
          </table>
        </div>
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

const MyCalendar = Calendar;
export default MyCalendar;
