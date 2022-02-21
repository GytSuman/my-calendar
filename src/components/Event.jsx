import React from "react";
import "./Event.css";
import "./header.css";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";

<<<<<<< HEAD
function Event(props) {
	const IconDisplay = () => {
		if (props.type === "video") return <VideocamIcon className="event-icon" />;
		else return <CallIcon className="event-icon" />;
	};
	return (
		<div
			style={{ position: "relative" }}
			className="border-4 event-background height-100 event-border p-1 flex-col"
		>
			<div className="flex-row height-100 font-12">
				<div
					className="border-2 flex-center flex-center2 black-bg white-color"
					style={{ width: "37px", height: "16px" }}
				>
					{props.timeFrom}
				</div>
				<div style={{ height: "16px" }} className="light-color pl-1">
					{props.timeTo}
				</div>
			</div>
			<div className="height-100 font-13 bold-font">{props.name}</div>
			<div className="light-color height-100 font-12">{props.title}</div>
			{IconDisplay()}
			{/* {props.type} */}
		</div>
	);
=======

function Event(props){
    const IconDisplay = () =>{
        if(props.type == 'video') return(<VideocamIcon className="event-icon" />)
        else return(<CallIcon className="event-icon" />)
    }
    return(
        <div style={{position:'relative'}}
        className="border-4 event-background height-100 event-border p-1 flex-col">
            <div className="flex-row height-100 font-12">
                <div className='border-2 flex-center flex-center2 black-bg white-color'
                style={{width: '37px',height: '16px'}}>{props.timeFrom}</div>
                <div style={{height: '16px'}} className='light-color pl-1'>{props.timeTo}</div>
            </div>
            <div className='height-100 font-13 bold-font text-elip'>{props.name}</div>
            <div className='light-color height-100 font-12 text-elip'>{props.title}</div>
            {IconDisplay()}
            {/* {props.type} */}
        </div>
    )
>>>>>>> c64b2f848840cb2f241fda7f4a71270fdfb44eb5
}

export default Event;
