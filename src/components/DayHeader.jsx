import { Grid } from '@mui/material'
import React from 'react'
import { col, height } from './style'

function DayHeader({ days }) {
  return (
    <>
    <Grid container>
      <Grid item xs={1}></Grid>
      <Grid item xs={11} className='flex'>
      {days.map(week =>
      (
        <>
        <Grid container>
          <Grid item style={{...col, ...height}} sx={{ width: "63.5vw"}}>
          <span>{week.dayName}</span> &nbsp;
          <span>{week.date}</span>
          <p>{week.monthName}</p>
          </Grid>
          </Grid>
        </>
      ))}
      </Grid>
    </Grid>
    </>
  )
}

export default DayHeader