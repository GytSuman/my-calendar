import React,{useContext} from "react";
import Day from "./Day";
import "./header.css";

export default function MonthGrid({ currentMonth, events }) {

	// console.log("currentMonth",currentMonth)
	return (
		<div className="flex-1 grid">
			{currentMonth &&
				currentMonth.map((row, i) => (
					<React.Fragment key={i}>
						{row.map((day, idx) => (
							<Day day={day} key={idx} rowIdx={i} events={events} />
						))}
					</React.Fragment>
				))}
		</div>
	);
}
