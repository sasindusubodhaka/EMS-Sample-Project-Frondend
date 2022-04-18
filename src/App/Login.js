import React from 'react'
import { Avatar, Grid, Paper, makeStyles, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles({
  avatarStyle: {
    backgroundColor: '#2d919b'
  },
  paperStyle: {
    padding: 20,
    height: '50vh',
    width: 300,
    margin: "20px auto"
  },
  btnStyle:{
    margin:'8px 0'
  }
})

const Login = () => {



  const classes = useStyles();

  return (
    <Grid> {/* nothing but div */}
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid align='center' >
          <Avatar className={classes.avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2>Sign in</h2>
        </Grid>
        <TextField label="Username" placeholder='Enter username' fullWidth='fulWidth required' />
        <TextField label="Password" placeholder='Enter password' type='password' fullWidth='fulWidth required' />
        <FormControlLabel
          control={
            <Checkbox
              // checked={state.checkedB}
              // onChange={handleChange}
              name="checkedB"
              color="primary"
            />
          }
          label="Remember me"
        />
        <Button type='submit' color='primary' className={classes.btnStyle} variant='contained' fullWidth>Sign in </Button>
        <Typography>
          <Link href="#" >forgot password</Link>
        </Typography>
        <Typography>Do you have account?
          <Link href="#" >Sign up </Link>
        </Typography>
      </Paper>

    </Grid>
  )
}

export default Login