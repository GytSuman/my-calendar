import { Grid } from '@mui/material'
import React from 'react'
import Header from './Header'

function WeekHeader({ weekdays }) {
  return (
    <>
    <Grid container>
      <Grid item xs={1}></Grid>
      <Grid item xs={11} className='flex'>
      {weekdays.map(week =>
      (
      <> 
        <Header weekDayName={week.weekDayName} date={week.date} dateStamp={week.dateStamp}/>
        </>
      ))}
      </Grid>
    </Grid>
    </>
  )
}

export default WeekHeader