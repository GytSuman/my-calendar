import React from 'react'
import { times } from '../weekUtils'
import TimeSlot from './TimeSlot'
import WeekHeader from './WeekHeader';

function WeekGrid({ weekdays }) {
  // const [weekdays, setWeekdays] = React.useState(getAllDaysInTheWeek());
  // const { events } = props


  console.log(weekdays)
  // console.log(events)

  return (
    <div>
      <WeekHeader weekdays={weekdays}/>
      {times.map(time => (
      <TimeSlot
      key={time}
      time={time}
      weekdays={weekdays}>
        <div>Task</div>
      </TimeSlot>
    ))}
    </div>
  
  )
}

export default WeekGrid