import { Grid } from '@mui/material'
import React from 'react'
import { isTodaysDate } from '../weekUtils'
import { col, slot,slot2, lightHighlighter } from "./style"
import Event from './Event'
import EventSmall from './EventSmall'

function Time(props) {
  const { weekDayName, dateStamp } = props
  const row = 12/7
  console.log(weekDayName)
  return (
    <>
    {/* <Grid container> */}
      {/* <Grid item
        key={dateStamp}
        style={isTodaysDate(dateStamp) ? {...col, ...slot, ...lightHighlighter} : {...col, ...slot}}
        sx={{ width: "200px",backgroundColor:'red'}}>
      <div>
        <div>9:00 - 10:00</div>
        <div>
          <div>Task 1</div>
        </div>
      </div>
      <Event type="voice" timeFrom="9.00" timeTo="9.30" name="Gavin Cooper" title="Tenant Q&A" />
      </Grid> */}
      <Grid item
        key={dateStamp}
        style={isTodaysDate(dateStamp) ? {...col, ...slot2, ...lightHighlighter} : {...col, ...slot2}}
        xs={row}
        //sx={{ width: "200px"}}
        >
        {/* <EventSmall timeFrom="9.00" name="Gavin Cooper"/> */}
        <Event type="voice" timeFrom="9.00" timeTo="9.30" name="Gavin Cooper" title="Tenant Q&A" />
      </Grid>
    {/* </Grid> */}
    </>
    
  )
}

export default Time