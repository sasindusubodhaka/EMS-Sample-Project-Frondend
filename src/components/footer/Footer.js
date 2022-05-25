import { AppBar, Grid } from '@material-ui/core'
import React from 'react'

function Footer() {
    return (
        <AppBar position="static">
            <Grid container justify="center">
                <Grid item>
                    @All Rights Reserved EMS 2022
                </Grid>
            </Grid>
        </AppBar>
    )
}

export default Footer