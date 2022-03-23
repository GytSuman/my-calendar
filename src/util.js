import dayjs from "dayjs";
import moment from "moment";
import { v4 as uuidv4 } from "uuid";

export function getMonth(month = dayjs().month()) {
	month = Math.floor(month);
	const year = dayjs().year();
	const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
	let currentMonthCount = 0 - firstDayOfTheMonth;
	const dayMatrix = new Array(5).fill([]).map(() => {
		return new Array(7).fill(null).map((dayObj) => {
			currentMonthCount++;
			return dayjs(new Date(year, month, currentMonthCount));
		});
	});
	return dayMatrix;
}

export const getMonthOriginal = (month = dayjs().month()) => {
	month = Math.floor(month);
	const year = dayjs().year();
	const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
	let currentMonthCount = 0 - firstDayOfTheMonth;
	const dayMatrix = new Array(5).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			currentMonthCount++;
			return dayjs(new Date(year, month, currentMonthCount));
		});
	});
	return dayMatrix;
};

export const hours = (times) => {
	console.log("time", times);
	let hrs = [];
	for (let i = 0; i <= times.length; i++) {
		hrs.push(moment({ hours: times[i], minutes: 0 }).format("hh:mm"));
		hrs.push(moment({ hours: times[i], minutes: 30 }).format("hh:mm"));
	}
	return hrs;
};

export const generateWeekView = (slot, dayObj) => {
	console.log("slot", dayObj);
	const startTime = dayjs(dayObj.startTime);
	const endTime = dayjs(dayObj.endTime);
	const differenceInMinutes = endTime.diff(startTime, "hours");
	const hours = parseInt(differenceInMinutes / 60);
	const totalMinutes = dayjs().minute(differenceInMinutes).$m;
	const test = totalMinutes * 60;
	console.log("total minutes", test);
	const height = slot.minHeight / 60;
	let minimumHeight = test * height;
	return minimumHeight;
};
export const getCount = (dateStamp, state) => {
	let count = 0;
	state.allEvents.map((eventObj) => {
		if (dayjs(eventObj?.weekDateStamp).format("DD MM YYYY") === dateStamp) count++;
	});
	return count;
};

export const getCountTimeslot = (day, time, state) => {
	let count = 0;
	state?.allEvents?.map((eventObj) => {
		if (
			dayjs(eventObj?.startTime).format("HH:mm") ===
				dayjs().hour(time).minute(0).format("HH:mm") &&
			dayjs(eventObj?.startTime).format("DD MM YYYY") == day.day
		)
			count++;
	});
	return count;
};

export const getEvents = (states,day,time) => {
	let arr = []
	states?.map((state)=>{
		if((state.dayOfTheYear === dayjs(day).format('DD MM YYYY'))
			&& (parseInt(dayjs(state.startTime).format("H")) === parseInt(time))) arr.push(state)
	})
	return arr
}