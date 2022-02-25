import { Grid } from "@mui/material";
import React from "react";
import { isTodaysDate } from "../weekUtils";
import { col, slot, slot2, lightHighlighter } from "./style";
import Event from "./Event";
import EventSmall from './EventSmall'
import CustomizedDialogs from "./CustomizedDialogWeek";

function Time(props) {
	const { weekDayName, dateStamp, events ,time, eventAdded , setEventAdded } = props;

	const row = 12/7
	const [eventAddedArray,setEventAddedArray] = React.useState([])
	//model
	const [open, setOpen] = React.useState(false);
	const openMonthEventDialog = () => {
		setOpen(true);
		console.log("clicked");
	};

	const onSetOpen = (value) => {
		setOpen(value);
	};

	
	const toggle = React.useCallback(() => {
		openMonthEventDialog()
	}, []);


	const eventDiv = () =>{
		if( eventAddedArray.length !== 0){
			return(
				<>
				{eventAddedArray.length !== 0 && eventAddedArray.map((evendAddedObj)=>{
					return (
						<Event
						type={evendAddedObj.type}
						name={evendAddedObj.name}
						title={evendAddedObj.title}
						hours={evendAddedObj.hours}
						time={time}
						/>
					) 
				})
				}
				</>
			)
		}
		// else if(eventAdded && eventAdded[3]==0.5){
		// 	return(
		// 		<EventSmall name={eventAdded[1]} time={time} />
		// 	)
		// }
	}

	React.useEffect(()=>{
		console.log('refreshed')
		console.log(eventAdded)
		eventDiv()
	},[eventAdded])

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
				<CustomizedDialogs onSetOpen={onSetOpen} time={time} open={open}
				getEvents = {eventAddedArray}
				setEvents = {setEventAddedArray}
				// events={events}
				/>
			)}
		</>
  	)
}

export default Time;
