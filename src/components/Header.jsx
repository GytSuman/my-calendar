import { Grid } from '@mui/material'
import React from 'react'
import { col, height, lightHighlighter } from "./style"
import { isTodaysDate } from '../weekUtils'

function Header({ weekDayName, date, dateStamp }) {
  const row = 12/7
  return (
    <>
    {/* <Grid container> */}
      <Grid item style={isTodaysDate(dateStamp) ? {...col, ...height, ...lightHighlighter} : {...col, ...height}}
      xs={row}
      //sx={{ width: "200px"}}
      >
      <p>{weekDayName}</p>
      <p>{date}</p>
      </Grid>
      {/* </Grid> */}
    </>
  )
}

export default Header