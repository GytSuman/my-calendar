import dayjs from "dayjs";
import moment from "moment";

export function getMonth(month = dayjs().month()) {
	month = Math.floor(month);
	console.log(month);
	const year = dayjs().year();
	console.log(year);
	const firstDayOfTheMonth = dayjs(new Date(year, month, 1)).day();
	console.log(firstDayOfTheMonth);
	let currentMonthCount = 0 - firstDayOfTheMonth;
	const daysMatrix = new Array(5).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			currentMonthCount++;
			return dayjs(new Date(year, month, currentMonthCount));
		});
	});
	console.log(daysMatrix);
	return daysMatrix;
}

export const getMonthOriginal = (month = moment().month()) => {
	month = Math.floor(month);
	console.log("23", month);
	const year = moment().year();
	console.log("26", year);
	const firstDayOfTheMonth = moment(new Date(year, month, 1)).day();
	console.log("28", firstDayOfTheMonth);
	let currentMonthCount = 0 - firstDayOfTheMonth;
	const dayMatrix = new Array(5).fill([]).map(() => {
		return new Array(7).fill(null).map(() => {
			currentMonthCount++;
			return moment(new Date(year, month, currentMonthCount));
		});
	});
	console.log("36", dayMatrix);
	return dayMatrix;
};

// export const getMonth = (today = moment()) => {
//   const calendar = [];
//   const startDay = today.clone().startOf('month').startOf('week');
//   const endDay = today.clone().endOf('month').endOf('week');

//   let date = startDay.clone().subtract(1, 'day');

//   while (date.isBefore(endDay, 'day')) {
//     calendar.push({
//         days: Array(7).fill(0).map(() => date.add(1, 'day').clone())
//     });
//   }
//   console.log("52",calendar);

//   return calendar;
// }
