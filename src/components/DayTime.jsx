import { Grid } from '@mui/material'
import React from 'react'
import { col, slot } from './style'

function DayTime({ time, dateStamp, dayName }) {
  return (
    <Grid container >
      <Grid item xs={10} key={dateStamp} style={{...col, ...slot}} sx={{ width: "80vw"}}></Grid>
    </Grid>
  )
}

export default DayTime