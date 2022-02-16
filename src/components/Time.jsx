import { Grid } from '@mui/material'
import React from 'react'
import { isTodaysDate } from '../weekUtils'
import { col, slot, lightHighlighter } from "./style"


function Time(props) {
  const { weekDayName, dateStamp } = props

  console.log(weekDayName)
  return (
    <>
    <Grid container><Grid item key={dateStamp} style={isTodaysDate(dateStamp) ? {...col, ...slot, ...lightHighlighter} : {...col, ...slot}} sx={{ width: "200px"}}>
      {/* <div>
        <div>9:00 - 10:00</div>
        <div>
          <div>Task 1</div>
        </div>
      </div> */}
      </Grid></Grid>
    </>
    
  )
}

export default Time