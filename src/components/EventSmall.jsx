import React from 'react'
import './Event.css'
import "./header.css"


function EventSmall(props){
    return(
        <div style={{position:'relative',width: '50%',height: '29px'}}
        // width: '151px'
        className="border-4 event-background height-100 event-border p-1 flex-row">
            <div className='border-2 flex-center flex-center2 black-bg white-color font-12'
                style={{width: '37px',height: '16px'}}>{props.timeFrom}</div>
            <div className='height-100 font-13 bold-font text-elip'>{props.name}</div>
        </div>
    )
}

export default EventSmall
