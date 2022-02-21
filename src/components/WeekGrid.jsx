<<<<<<< HEAD
import React from "react";
import { getAllDaysInTheWeek, times } from "../weekUtils";
import TaskProgress from "./TaskProgress";
import TimeSlot from "./TimeSlot";
import WeekHeader from "./WeekHeader";
=======
import React from 'react'
import { Grid } from '@mui/material'
import { getAllDaysInTheWeek, times } from '../weekUtils'
import TaskProgress from './TaskProgress';
import TimeSlot from './TimeSlot'
import WeekHeader from './WeekHeader';
>>>>>>> c64b2f848840cb2f241fda7f4a71270fdfb44eb5

function WeekGrid({ weekdays, events, addNewEvents }) {
	// const [weekdays, setWeekdays] = React.useState(getAllDaysInTheWeek());
	// const { events } = props

	console.log(weekdays);
	// console.log(events)

<<<<<<< HEAD
	return (
		<div>
			<WeekHeader weekdays={weekdays} />
			<TaskProgress />
			{times.map((time) => (
				<>
					<TimeSlot
						key={time}
						time={time}
						weekdays={weekdays}
						events={events}
					></TimeSlot>
				</>
			))}
		</div>
	);
=======
  console.log(weekdays)
  // console.log(events)

  return (
    <div style={{maxMidth:'100%',width:'1574px'}}>
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
>>>>>>> c64b2f848840cb2f241fda7f4a71270fdfb44eb5
}

export default WeekGrid;
