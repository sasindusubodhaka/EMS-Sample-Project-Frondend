import React from 'react'
import { Grid, makeStyles } from '@material-ui/core'
import DataCard from '../../components/dataCard/DataCard'
import UserTypeChart from './Charts/UserTypeChart'
import RegUsersChart from './Charts/RegUsersChart'
import { CardItems } from './CardItems'
import { useSelector } from 'react-redux'
import withReducer from '../../store/WithReducer'
import reducer from './store/reducer'

const useStyles = makeStyles({
  dataCard: {
    backgroundColor: '#000059',
    borderRadius: '5px',
    margin: '20px',
    marginTop: '20px',
  },
})

const Dashboard = () => {
  const reducerData = useSelector(({ stat }) => stat.adminDashboard)
  const CardDetails = reducerData.dataCardDetails;

  // const adminDataItems = CardItems
  const classes = useStyles();
  return (
    <>
      <Grid container spacing={3}>
        <Grid className={classes.dataCard} item sm={12}>
          <DataCard cardItems={CardDetails} />
        </Grid>
        <Grid item sm={12}>
          <Grid container  spacing={1}>
            <Grid className={classes.dataCard} item sm={6}>
              <RegUsersChart />
            </Grid>
            <Grid className={classes.dataCard} item sm={5}>
              <UserTypeChart />  
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}

export default withReducer('stat', reducer)(Dashboard)