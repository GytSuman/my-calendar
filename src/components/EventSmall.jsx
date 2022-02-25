import React from 'react'
import './Event.css'
import "./header.css"
import moment from "moment";

function EventSmall({time,name}){
    return(
        <div style={{position:'relative',width: '50%',height: '29px'}}
        // width: '151px'
        className="border-4 event-background height-100 event-border p-1 flex-row">
            <div className='border-2 flex-center flex-center2 black-bg white-color font-12'
                style={{width: '37px',height: '16px'}}>{moment().set("hours", time).format("h a")}</div>
            <div className='height-100 font-13 flex-center flex-center2 bold-font text-elip'>{name}</div>
        </div>
    )
}

export default EventSmall
