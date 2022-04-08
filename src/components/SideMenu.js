import React from 'react'
import { makeStyles } from '@material-ui/core'

//withStyles and makeStyles

const useStyles = makeStyles({
    sideMenu:{
        display:'flex',
        flexDirection:'column',
        position:'absolute',
        left:'0px',
        width:'320px',
        height:'100%',
        backgroundColor:'#253053'
    }
})

const SideMenu=()=> {

const classes = useStyles();
console.log(classes)
  return (
    <div className={classes.sideMenu}>
      
    </div>
  )
}

export default SideMenu
