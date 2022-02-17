import React from 'react'
import { getDays } from '../dayUtils'
import { times } from '../weekUtils';
import DayHeader from './DayHeader';
import DayTimeSlot from './DayTimeSlot';

function DayGrid({ days }) {
  

  console.log(days);
  return (
    <div>
      <DayHeader days={days}/>
    {times.map(time => (
      <>
      <DayTimeSlot key={time} time={time} days={days}></DayTimeSlot>
      </>
    ))}
    </div>
  )
}

export default DayGrid