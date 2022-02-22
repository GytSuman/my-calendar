
import React from 'react'
import { times } from '../weekUtils'
import TaskProgress from './TaskProgress';
import TimeSlot from './TimeSlot'
import WeekHeader from './WeekHeader';

function WeekGrid({ weekdays,events, addNewEvents }) {
  return (
    <div style={{maxWidth:'100%',width:'1227px'}}>
      <WeekHeader weekdays={weekdays}/>
      <TaskProgress />
      {
        times.map(time => (
        <>
        <TimeSlot
        key={time}
        time={time}
        weekdays={weekdays}>
          <div>Task</div>
        </TimeSlot>
        </>
        ))
      }
    </div>
  )
}

export default WeekGrid;
