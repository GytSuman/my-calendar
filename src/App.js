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

function App() {
  const [currenMonth, setCurrentMonth] = React.useState(getMonth());
  const { monthIndex, showEventModal } = React.useContext(GlobalContext);
  const [type, setType] = React.useState("month")

  const handleInputChange = (event) => {
    setType(event.target.value)
  }

  React.useEffect(() => {
    setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  return (
    <div className="App">
     <CalendarHeader type={type} handleInputChange={handleInputChange}/>
     <div className='app__container'>
       <Sidebar/>
       <Divider orientation='vertical'/>
       {type === "month"  && <MonthGrid month={currenMonth}/>}
       {type === "week" && <WeekGrid />}
       {type === "day" && <DayGrid />}
     </div>
    </div>
  );
}

export default App;
