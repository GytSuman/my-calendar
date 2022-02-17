import React from 'react'
import { Grid } from '@mui/material'
import Task from './Task'

import './Event.css'
import "./header.css"

function TaskProgress(props){

    return(
        <Grid container className='light-bg' direction="row">
            <Grid item xs={1} sx={{ paddingLeft: "16px", paddingTop: "8px"}}>Tasks</Grid>
            <Grid item container xs={11} sx={{height: '68px'}} className='flex'>
                <Task/>
            </Grid>
        </Grid>
    )
}

export default TaskProgress
