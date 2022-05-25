import React, { useState} from 'react'
import { Avatar, Grid, Paper, makeStyles, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import WithReducer from '../../store/WithReducer';
import reducer from './store/reducer';
import * as Action from './store/action'
import validator from 'validator';
import * as _ from 'lodash'
import { useDispatch } from 'react-redux'


const useStyles = makeStyles({
  avatarStyle: {
    backgroundColor: '#2d919b'
  },
  paperStyle: {
    padding: '20px ',
    height: '50vh',
    width: 300,
    margin: " 100px auto"
  },
  btnStyle: {
    margin: '8px 0'
  }
})

let initialFormValue = {
  userName: '',
  password: ''
}

let initialError = {
  userNameErrors: {},
  passwordErors: {}
}

const Login = () => {

  const classes = useStyles();


  const [formValue, setFormValue] = useState({ ...initialFormValue })
  const [errors, setErrors] = useState({ ...initialError })
  // const [showPassword, setShowPassword] = useState(false)

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault()
    const isValid = validation()

    if (isValid) {
      let data = { email: formValue.userName, password: formValue.password }
      dispatch(Action.UserLogin(data));
    }
    else {
      console.log('fail')
    }
  }

  const validation = () => {
    let localErrors = _.cloneDeep(errors) //maake a seperate local errors object and assign it to locaErrors
    let isValid = true

    //validating userName
    if (!validator.isEmail(formValue.userName)) {
      let invalidUserName = Object.assign({}, { invalidUserName: 'invalid user name' })
      localErrors.userNameErrors = invalidUserName
      isValid = false
      console.log("isvalid:", isValid)
    }
    else {
      localErrors.userNameErrors.invalidUserName = null
    }

    //validating password 

    if (formValue.password.trim().length < 1) {
      let passwordMissing = Object.assign({}, { passwordMissing: 'password is missing' })
      localErrors.passwordErors = passwordMissing
      isValid = false
    }
    else {
      localErrors.passwordErors.passwordMissing = null
    }

    setErrors({ ...localErrors })

    return isValid
  }

  const onMyChange = (v) => {
    let value = v.target.value
    let name = v.target.name
    setFormValue({ ...formValue, [name]: value })

  }



  return (
    <Grid> {/* nothing but div */}
      <Paper elevation={10} className={classes.paperStyle}>
        <Grid align='center' >
          <Avatar className={classes.avatarStyle}><LockOutlinedIcon /></Avatar>
          <h2>Sign in</h2>
        </Grid>

        {/* <FormControl> */}
        <TextField
          value={formValue.userName}
          name="userName"
          label="Username"
          placeholder='Enter username'
          fullWidth={true}
          onChange={onMyChange}
        />
        <Grid>
          {Object.keys(errors.userNameErrors).map((key, index) => {
            return (
              <div key={index} style={{ color: 'red' }}>
                {errors.userNameErrors[key]}
              </div>
            )
          })}
        </Grid>

        <TextField
          value={formValue.password}
          label="Password"
          placeholder='Enter password'
          type='password'
          fullWidth={true}
          name="password"
          onChange={onMyChange}
        />
        <Grid>
          {Object.keys(errors.passwordErors).map((key, index) => {
            return (
              <div key={index} style={{ color: 'red' }}>
                {errors.passwordErors[key]}
              </div>
            )
          })}
        </Grid>
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
        <Button type='submit' color='primary' className={classes.btnStyle} variant='contained' fullWidth onClick={onSubmit}>Sign in </Button>

        <Typography>
          <Link href="#" >forgot password</Link>
        </Typography>
        <Typography>
          Do you have account?
          <Link href="#" >Sign up </Link>
        </Typography>
      </Paper>

    </Grid>
  )
}
// export default Login;
export default WithReducer('log', reducer)(Login)