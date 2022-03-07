import React from 'react'
import { times } from '../../weekUtils'
import { hours } from '../../util'
import TaskProgress from '../Shared/Tasks/TaskProgress';
import TimeSlot from './TimeSlot'
import WeekHeader from './WeekHeader';

import './WeekView.scss'

function WeekGrid({ weekdays, eventAdded , setEventAdded }) {
	const hoursArray = hours(times)
	return (
    <div className="width-100">
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
      }
    </div>
  )
}

export default WeekGrid;
