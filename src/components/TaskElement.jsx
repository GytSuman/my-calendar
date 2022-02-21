import React from 'react'
import { Grid } from '@mui/material'
import './Event.css'
import "./header.css"

import MultiProgress from "react-multi-progress"

const TaskElement = (props) => {
    return(
        <div className='flex-col'>
        <div className="flex-row flex-space-between font-14 bold-font pb-1" style={{width:'100%'}}>
            <div className="text-elip">{props.number} Task</div>
            <div className="text-elip">{props.hours} hrs</div>
        </div>
        <div style={{width:'100%'}}>
            <MultiProgress
                height={16}  round={false} roundLastElement={false}
                    elements={
                        [
                            {
                                value: props.green,
                                color: "#028859",
                            },
                            {
                                value: props.yellow,
                                color: "#FFC402",
                            },
                            {
                                value: props.gray,
                                color: "#DFE1E6",
                            }
                        ]
                    }
                />
        </div>
        </div>
    )
}

export default TaskElement