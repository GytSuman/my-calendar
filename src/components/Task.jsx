import React from 'react'
import { Grid } from '@mui/material'
import './Event.css'
import "./header.css"
import TaskElement from './TaskElement'

function Task(){
    return(
        <>
        <Grid item p={2} sx={{width:'200px'}} className="height-100">
            <TaskElement number={3} hours={8} green={80} yellow={20} gray={0}/>
        </Grid>
        <Grid item p={2} sx={{width:'200px'}} className="height-100">
            <TaskElement number={1} hours={8} green={0} yellow={70} gray={30}/>
        </Grid>
        </>
    )
}

export default Task
