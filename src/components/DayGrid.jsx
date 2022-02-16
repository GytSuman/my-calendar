import React from 'react'
import { getDays } from '../dayUtils'

function DayGrid() {

  const day = getDays()

  console.log(day);
  return (
    <div>DayGrid</div>
  )
}

export default DayGrid