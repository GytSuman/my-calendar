import React from "react";
import CustomizedDialogs from "../shared/ModelForms/CustomizedDialog";
import Day from "./Day";
import "./MonthView.scss";

export default function MonthGrid({ currentMonth, events }) {
	return (
		<div className="flex-1 grid">
			{/* <CustomizedDialogs /> */}
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
