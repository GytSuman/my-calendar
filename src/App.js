import './App.css';
import React from "react"
import CalendarHeader from './components/CalendarHeader';
import MonthGrid from './components/MonthGrid';
import Sidebar from './components/Sidebar';
import GlobalContext from './context/GlobalContext';
import { getMonth } from './util';
import { Divider } from '@mui/material';
import WeekGrid from './components/WeekGrid';
import DayGrid from './components/DayGrid';
import { getAllDaysInTheWeek } from './weekUtils';
import moment from 'moment';
import { getDays } from './dayUtils';

function App() {
  const [currenMonth, setCurrentMonth] = React.useState(getMonth());
  const [weekdays, setWeekdays] = React.useState(getAllDaysInTheWeek());
  const [days, setDays] = React.useState(getDays());
  const [startDate, setStartDate] = React.useState();
  const { monthIndex, showEventModal } = React.useContext(GlobalContext);
  const [type, setType] = React.useState("month")

  const goToNextWeek = () => {
    if(type === "week"){
      const dateAfter7Days = moment (startDate).add (7, 'days');
      setStartDate(dateAfter7Days);
      setWeekdays(getAllDaysInTheWeek(dateAfter7Days));
    }
    if(type === "day"){
      const dateAfterDay = moment(startDate).add(1, "day")
      setStartDate(dateAfterDay);
      setDays(getDays(dateAfterDay));
    }
  };

  /**
   * Sets previous week days in the state
  */
  const goToPreviousWeek = () => {
    if(type === "week"){
      const dateBefore7Days = moment (startDate).subtract (7, 'days');
      setStartDate(dateBefore7Days);
      setWeekdays(getAllDaysInTheWeek(dateBefore7Days));
    }
    if(type === "day"){
      const dateBeforeDay = moment(startDate).subtract(1, "day")
      setStartDate(dateBeforeDay);
      setDays(getDays(dateBeforeDay));
    }
    
  };

  const handleInputChange = (event) => {
    setType(event.target.value)
  }

  React.useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <div className="App">
     <CalendarHeader type={type} handleInputChange={handleInputChange} goToPreviousWeek={goToPreviousWeek} goToNextWeek={goToNextWeek} startDate={startDate}/>
     <div className='app__container'>
       <Sidebar/>
       <Divider orientation='vertical'/>
       {type === "month"  && <MonthGrid month={currenMonth}/>}
       {type === "week" && <WeekGrid weekdays={weekdays} goToPreviousWeek={goToPreviousWeek} goToNextWeek={goToNextWeek}/>}
       {type === "day" && <DayGrid days={days}/>}
     </div>
    </div>
  );
}

export default App;
