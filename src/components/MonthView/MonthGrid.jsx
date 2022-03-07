import React from "react";
import Day from "./Day";
import './MonthView.scss'

export default function MonthGrid({ currentMonth, events }) {
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
