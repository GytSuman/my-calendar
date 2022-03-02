import moment from "moment";
import dayjs from "dayjs";
import React, { useEffect } from "react";
export const getDays = (currentDay = moment()) => {
	const presentDay = currentDay.clone().startOf("date");
	const day = Array.from(Array(1))
		.map((day, index) => index)
		.map((day) =>
			moment(presentDay).add(day, "days").set("minutes", 0).set("seconds", 0)
		)
		.map((momentObj) => ({
			date: momentObj.date(),
			dateStamp: +momentObj,
			dayName: momentObj.format("ddd"),
			monthName: momentObj.format("MMMM"),
		}));
	return day;
};

export function useEvents(props){
	const [event,setEvent] = React.useState("")
	React.useEffect(() => {
		// if(props==""){
		// 	setEvent('hello')
		// }else{
		// 	setEvent(props)
		// }
		setEvent('hello')
	});
	return [event,setEvent]
}