import { Grid } from "@mui/material";
import React from "react";
import { col, slot2 } from "./style";
import Event from "./Event";
import EventSmall from './EventSmall'
import CustomizedDialogs from "./CustomizedDialogWeek";

function DayTime({ time, dateStamp, dayName }) {
	//model
	const [open, setOpen] = React.useState(false);
	const openMonthEventDialog = () => {
		setOpen(true);
		console.log("clicked");
	};

	const onSetOpen = (value) => {
		setOpen(value);
	};

	const [eventAdded,setEventAdded] = React.useState([])
	const toggle = React.useCallback(() => {
		openMonthEventDialog()
	}, []);

	const eventDiv = () =>{
		if(eventAdded[3]==1){
			return(
				<>
				{eventAdded.length != 0 &&
					<Event
						type={eventAdded[0]}
						name={eventAdded[1]}
						title={eventAdded[2]}
						hours={eventAdded[3]}
						time={time}
					/>
				}
				</>
			)
		}else if(eventAdded[3]==0.5){
			return(
				<EventSmall name={eventAdded[1]} time={time} />
			)
		}
	}

	React.useEffect(()=>{
		eventDiv()
	},[eventAdded])


	return (
		<Grid container>
			<Grid
				item
				xs={12}
				key={dateStamp}
				style={{ ...col, ...slot2 }}
				sx={{ width: "80vw" }}
				onClick={toggle}
			>
				{eventDiv()}	
			</Grid>
			{open && (
				<CustomizedDialogs onSetOpen={onSetOpen} time={time} open={open}
				getEvents = {eventAdded}
				setEvents = {setEventAdded}
				// events={events}
				/>
			)}
		</Grid>
	);
}

export default DayTime;
