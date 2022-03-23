import React from "react";
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import "./Events.scss";
import dayjs from "dayjs";
import { useCalendar } from "../../../context/calendarContext";
import { getMinutes } from "../../../util";


export function EventBig({ type, event }) {
    const handleClick = (e) => {
        e.stopPropagation()
        dispatch({ type: 'DISPLAY_EVENT', payload: event })
    }
    return (
        <>
            < div
                className="border-4 event-background event-border m-1 flex-col"
                style={{
                    padding: '0',
                    width: '100%',
                    height: "80px",
                    position: "relative"
                }}
                onClick={handleClick}
            >
                <div className="flex-row font-12 p-1" style={{ flexWrap: "wrap" }}>
                    <div
                        className="border-2 flex-center flex-center2 black-bg white-color mr-1 text-elip"
                    >
                        {dayjs(event.startTime).format("hh:mm")}
                    </div>
                    <div
                        className="light-color text-elip">
                        {dayjs(event.endTime).format("hh:mm ")}
                    </div>
                </div>
                <div className="font-13 bold-font text-elip pl-1">
                    {
                        event.name.length > 6 ?
                            `${event.name.slice(0, 6)}...`
                            :
                            event.name
                    }
                </div>
                <div className='flex flex-between'>
                    <div
                        className="light-color font-12 pl-1"
                    >
                        {event.title}hello
                    </div>
                    {IconDisplay()}
                </div>
            </div >
        </>
    )
}