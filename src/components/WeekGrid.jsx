import React from 'react'
import { times, getHoursInDay } from '../weekUtils'
import TaskProgress from './TaskProgress';
import TimeSlot from './TimeSlot'
import WeekHeader from './WeekHeader';
import moment from 'moment'
function WeekGrid({ weekdays,events, addNewEvents , eventAdded , setEventAdded }) {
	let hours = () => {
		let hrs = []
		for(let i = 0;i<=times.length;i++) {
			hrs.push(moment({ hours : times[i] ,minutes : 0}).format('h:mm A'))
			hrs.push(moment({ hours : times[i] ,minutes : 30}).format('h:mm A'))
		}
		return hrs
	}
	const hoursArray = hours()
	return (
    <div style={{width:'100%'}}>
      <WeekHeader weekdays={weekdays}/>
      <TaskProgress />
      {
		hoursArray.map(time => (
			<>
			<TimeSlot
				key={time}
				time={time}
				weekdays={weekdays}
				eventAdded={eventAdded}
				setEventAdded={setEventAdded}
			>
				<div>Task</div>
			</TimeSlot>
			</>
		))
        // times.map(time => (
        //   <>
        //     <TimeSlot
        //       key={time}
        //       time={time}
        //       weekdays={weekdays}
        //       eventAdded={eventAdded}
        //       setEventAdded={setEventAdded}
        //     >
        //       <div>Task</div>
        //     </TimeSlot>
        //   </>
        // ))
      }
    </div>
  )
}

export default WeekGrid;
