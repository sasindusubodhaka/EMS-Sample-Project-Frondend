// import { size } from 'lodash'
import React from 'react';
import 'chart.js/auto';
import { Pie, Doughnut } from 'react-chartjs-2';
// import { useSelector } from 'react-redux';
// import withReducer from '../../../../../../store/withReducer'
// import reducer from '../store/reducer/index'
import { makeStyles } from '@material-ui/styles'
import { CardItems } from '../CardItems';
import {
  Card,
  CardContent,
  CardHeader

} from '@material-ui/core'



const useStyles = makeStyles({

  headerTitle: {
    textAlign: 'center',
    fontWeight: 'bold',
    alignContent: 'center',
    color: 'black',
  },
  chart:{
    height:'100%',
    backgroundColor:'#fff',
    width:"100%"
  }

});

const UserTypeChart = () => {
  // const reducerData = useSelector(({ userType }) => userType.adminDashboard);
  // const adminDataItems = reducerData.userCounts;
  const materializeUIClasses = useStyles();
  const adminDataItems = CardItems;
  let usersData = [];
  adminDataItems && adminDataItems.map((users) => {
    usersData.push(users.value);
  })
  const state = {
    labels: ['Departments', 'Registered Users', 'User Roles'],
    datasets: [
      {
        // label: 'Rainfall',
        backgroundColor: [
          '#28B1D6',
          '#66F1BD',
          '#00ff00',
          '#C1C2AD',

        ],
        hoverBackgroundColor: [
          '#2771D6',
          '#6771BD',
          '#077f00',
          '#C772AD',
        ],
        data: usersData
      }
    ]
  }
  {
    return (
      <Card>
        <CardHeader title={"Registered User Types"} style={{ backgroundColor: 'rgba(0,0,205,0.5)', opacity: '0.9', textAlign: 'center' }} classes={{ title: materializeUIClasses.headerTitle }} ></CardHeader>
        <CardContent style={{height:'10cm'}}>
            <Pie
              data={state}
              options={{
                responsive: true,
                maintainAspectRatio: false,

              }}
            />      
        </CardContent>
      </Card>
    );
  }
}
// export default withReducer('userType', reducer)(UserTypeChart);
export default UserTypeChart