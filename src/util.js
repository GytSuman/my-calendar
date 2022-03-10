import dayjs from "dayjs";
import moment from "moment";

export function getMonth(month = dayjs().month()) {
	month = Math.floor(month);
	// console.log(month);
	const year = dayjs().year();
	// console.log(year);
	const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
	// console.log(firstDayOfTheMonth);
	let currentMonthCount = 0 - firstDayOfTheMonth;
	const daysMatrix = new Array(5).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			currentMonthCount++;
			return dayjs(new Date(year, month, currentMonthCount));
		});
	});
	// console.log(daysMatrix);
	return daysMatrix;
}

export const getMonthOriginal = (month = moment().month()) => {
	month = Math.floor(month);
	const year = moment().year();
	const firstDayOfTheMonth = moment(new Date(year, month, 1)).day();
	let currentMonthCount = 0 - firstDayOfTheMonth;
	const dayMatrix = new Array(5).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			currentMonthCount++;
			return moment(new Date(year, month, currentMonthCount));
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
	console.log(hrs);
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
