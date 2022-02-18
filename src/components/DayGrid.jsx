import React from 'react'
import { Grid } from '@mui/material'  
import { getDays } from '../dayUtils'
import { times } from '../weekUtils';
import DayHeader from './DayHeader';
import DayTimeSlot from './DayTimeSlot';
import TaskElement from './TaskElement'

function DayGrid({ days }) {
  console.log(days);
  return (
    <div>
      <DayHeader days={days}/>
      <Grid container direction="row">
        <Grid item xs={1} sx={{ paddingLeft: "16px", paddingTop: "8px"}}>Task</Grid>
        <Grid item container xs={11} className="height-100">
          <Grid item xs={10} p={2} sx={{ width: "80vw"}} className="light-bg">
            <TaskElement number={3} hours={8} green={80} yellow={20} gray={0}/>
          </Grid>
        </Grid>
      </Grid>
      {times.map(time => (
        <>
        <DayTimeSlot key={time} time={time} days={days}></DayTimeSlot>
        </>
      ))}
    </div>
  )
}

export default DayGrid