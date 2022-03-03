import { Grid } from "@mui/material";
import React, { useEffect } from "react";
import { isTodaysDate } from "../weekUtils";
import { col, slot, slot2, lightHighlighter } from "./style";
import Event from "./Event";
import EventSmall from './EventSmall'
import CustomizedDialogs from "./CustomizedDialogWeek";
import moment from 'moment'

import { useEvent } from '../context/EventContext'

function Time(props) {
	const { weekDayName, dateStamp, events ,time, eventAdded , setEventAdded } = props;
	
	const event = useEvent()

	const row = 12/7
	const [eventAddedArray,setEventAddedArray] = React.useState([])
	//model
	const [open, setOpen] = React.useState(false);
	const openMonthEventDialog = () => {
		setOpen(true)
		console.log("clicked",time)
	};

	const onSetOpen = (value) => {
		setOpen(value);
	};

	const toggle = React.useCallback(() => {
		openMonthEventDialog()
	}, []);

	const eventDiv = () =>{
		return(
			<>
			{
				event.event.map((x)=>{
					if((x.dateStamp===dateStamp)&&(x.timeFrom===time)){
						return(
							<Event
								type={x.type}
								name={x.name}
								title={x.title}
								hours={x.hours}
								timeFrom={x.timeFrom}
								timeTo={x.timeTo}
							/>
						)	
					}
				})
			}
			</>
		)
		// if( eventAddedArray.length !== 0){
		// 	return(
		// 		<>
		// 		{eventAddedArray.length !== 0 && eventAddedArray.map((evendAddedObj)=>{
		// 			return (
		// 				<Event
		// 					type={evendAddedObj.type}
		// 					name={evendAddedObj.name}
		// 					title={evendAddedObj.title}
		// 					hours={evendAddedObj.hours}
		// 					timeFrom={evendAddedObj.timeFrom}
		// 					timeTo={evendAddedObj.timeTo}
		// 				/>
		// 			) 
		// 		})
		// 		}
		// 		</>
		// 	)
		// }
	}

	return (
		<>
			<Grid item
				key={dateStamp}
				style={isTodaysDate(dateStamp) ? {...col, ...slot2, ...lightHighlighter} : {...col, ...slot2}}
				xs={row}
				onClick={toggle}
			>
				{eventDiv()}
			</Grid>
			{open && (
				<CustomizedDialogs onSetOpen={onSetOpen} dateStamp={dateStamp} time={time} open={open}
				// getEvents = {eventAddedArray}
				// setEvents = {setEventAddedArray}
				// events={events}
				/>
			)}
		</>
  	)
}

export default Time;
