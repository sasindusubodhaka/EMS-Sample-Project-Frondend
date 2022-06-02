import React from 'react';
import 'chart.js/auto';
import { Bar} from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import withReducer from '../../../store/WithReducer'
import reducer from '../store/reducer'
import { makeStyles } from '@material-ui/styles'
// import { CardItems } from '../CardItems';
import {
  Card,
  CardContent,
  CardHeader

} from '@material-ui/core'


const useStyles = makeStyles({

  headerTitle: {
    textAlign:'center',
    fontWeight:'bold',
    alignContent:'center',
    color:'white'
    
  }
});


const RegUsersChart = () => {
  const reducerData = useSelector(({ regUser }) => regUser.adminDashboard);
  const monthlyRegisteredUsers = reducerData.registeredUsers;
  console.log("monthlyRegisteredUsers :",monthlyRegisteredUsers)
  const materializeUIClasses = useStyles();
  const state = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: '2022 Regstered Users',
        backgroundColor: [
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)',
          'rgba(75,192,192,0.5)',
          'rgba(0,0,205,0.5)'

        ],
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 0.2,
        data: monthlyRegisteredUsers
      }
    ]
  }
  {
    return (
      <Card >
        <CardHeader title={"Monthly Registered Users"} style={{ backgroundColor: '#000059', margin: '0', opacity: '0.9',textAlign: 'center' }} classes={{title: materializeUIClasses.headerTitle}}></CardHeader>
        <CardContent style={{height:'10cm'}}>         
            <Bar
              data={state}
              options={{
                title: {
                  display: true,
                  text: 'Average Rainfall per month',
                  fontSize: 20
                },
                legend: {
                  display: true,
                  position: 'right'
                },
                scales: {
                  y: {
                    beginAtZero: true
                  }
                }
              }}
            /> 
        </CardContent>
      </Card>
    );
  }
}
export default withReducer('regUser', reducer)(RegUsersChart);
