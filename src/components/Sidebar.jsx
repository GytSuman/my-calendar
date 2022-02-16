import React from 'react'
import dayjs from "dayjs";
import GlobalContext from "../context/GlobalContext";
import { getMonth } from "../util";
import "./header.css"
import { Button, Divider, IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function Sidebar() {
  const [currentMonthIdx, setCurrentMonthIdx] = React.useState(
    dayjs().month()
  );
  const [currentMonth, setCurrentMonth] = React.useState(getMonth());
  React.useEffect(() => {
    setCurrentMonth(getMonth(currentMonthIdx));
  }, [currentMonthIdx]);

  const {
    monthIndex,
    setSmallCalendarMonth,
    setDaySelected,
    daySelected,
  } = React.useContext(GlobalContext);

  React.useEffect(() => {
    setCurrentMonthIdx(monthIndex);
  }, [monthIndex]);

  function handlePrevMonth() {
    setCurrentMonthIdx(currentMonthIdx - 1);
  }
  function handleNextMonth() {
    setCurrentMonthIdx(currentMonthIdx + 1);
  }
  function getDayClass(day) {
    const format = "DD-MM-YY";
    const nowDay = dayjs().format(format);
    const currDay = day.format(format);
    const slcDay = daySelected && daySelected.format(format);
    if (nowDay === currDay) {
      return "nowDay";
    } else if (currDay === slcDay) {
      return "slcDay";
    } else {
      return "";
    }
  }
  return (
    <>
    <aside>
      <div className="mt-9">
      <header className="sidebar__header">
      <IconButton onClick={handlePrevMonth}><ArrowBackIosNewIcon/></IconButton>
        <p className="text-gray-500 font-bold">
          {dayjs(new Date(dayjs().year(), currentMonthIdx)).format(
            "MMMM YYYY"
          )}
        </p>

        <IconButton onClick={handleNextMonth}><ArrowForwardIosIcon/></IconButton>
      
      </header>
      <div className="grid">
        {currentMonth[0].map((day, i) => (
          <Button key={i} className="text-center padding-y border-sidebar padding-x" >
            {day.format("dd").charAt(0)}
          </Button>
        ))}
        {currentMonth.map((row, i) => (
          <React.Fragment key={i}>
            {row.map((day, idx) => (
              <Button
                key={idx}
                onClick={() => {
                  setSmallCalendarMonth(currentMonthIdx);
                  setDaySelected(day);
                }}
                className={`padding-y w-full ${getDayClass(day)}`}
              >
                <span className="text-sm">{day.format("D")}</span>
              </Button>
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
    
    </aside>
    <Divider orientation='vertical'/>
    </>
  )
}
