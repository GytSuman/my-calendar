import React from 'react'
import VideocamIcon from "@mui/icons-material/Videocam";
import CallIcon from "@mui/icons-material/Call";
import dayjs from 'dayjs'
import { useCalendar } from "../../../context/calendarContext";
import './Events.scss'

function EventSmall({ type, event }) {
    const { state, dispatch } = useCalendar()
    const IconDisplay = () => {
        if (type === "video") return <VideocamIcon className="event-icon" />;
        else return <CallIcon className="event-icon" fontSize="16px" />;
    };
    const handleClick = (e) => {
        e.stopPropagation()
        dispatch({ type: 'DISPLAY_EVENT', payload: event })
    }
    const eventConStyle = {
        padding: '0',
        width: '100%',
        height: "25px",
        position: "relative",
    };

    return (
        <>
            <div
                className="border-4 event-background flex-between flex-center event-border m-1 flex-row"
                style={{ ...eventConStyle }}
                onClick={handleClick}
            >
                <div className="flex-row font-12" style={{ height: '16px' }}>
                    <div
                        className="border-2 flex-center flex-center2 black-bg white-color mr-1 text-elip"
                    >
                        {dayjs(event.startTime).format("hh:mm")}
                    </div>
                </div>
                <div className="font-13 bold-font flex-grow text-elip">
                    {
                        event.name.length > 6 ?
                            `${event.name.slice(0, 6)}...`
                            :
                            event.name
                    }
                </div>
                {IconDisplay()}
            </div >
        </>
    )
}

export default EventSmall
