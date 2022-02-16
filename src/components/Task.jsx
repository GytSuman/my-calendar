import React from 'react'
import { Grid } from '@mui/material'
import './Event.css'
import "./header.css"

import MultiProgress from "react-multi-progress"
import LinearProgress from '@mui/material/LinearProgress';

function Task(props){
    return(
        <Grid item sx={{width:'200px'}} className="height-100">
            <MultiProgress
            height={16}  round={false}
                elements={
                    [
                        {
                            value: 35,
                            color: "#028859",
                        },
                        {
                            value: 35,
                            color: "#FFC402",
                        },
                        {
                            value: 35,
                            color: "#DFE1E6",
                        }
                    ]
                }
		    />
        </Grid>
    )
}

export default Task
