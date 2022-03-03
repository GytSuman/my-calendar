import React from 'react'
import { Grid } from '@mui/material'
import Task from './Task'

function TaskProgress(props){
    return(
        <Grid container direction="row">
            <Grid item xs={1} className="text-elip flex-center flex-center2">Tasks</Grid>
            <Grid item container xs={11} sx={{height: '68px'}} className='flex light-bg'>
                <Task/>
            </Grid>
        </Grid>
    )
}

export default TaskProgress
