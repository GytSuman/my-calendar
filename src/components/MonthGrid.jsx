import React from "react";
import Day from "./Day";
import "./header.css"
export default function MonthGrid({ month }) {
  return (
    <div className="flex-1 grid">
      {month.map((row, i) => (
        <React.Fragment key={i}>
          {row.map((day, idx) => (
            <Day day={day} key={idx} rowIdx={i} />
          ))}
        </React.Fragment>
      ))}
    </div>
  );
}
