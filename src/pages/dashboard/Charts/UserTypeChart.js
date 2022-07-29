// import { size } from 'lodash'
import React from 'react';
import 'chart.js/auto';
import { Pie, Doughnut } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import withReducer from '../../../store/WithReducer'
import reducer from '../store/reducer'
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
    color: 'white',
  },
  chart:{
    height:'100%',
    backgroundColor:'#fff',
    width:"100%"
  }

});

const UserTypeChart = () => {
  const reducerData = useSelector(({ userType }) => userType.adminDashboard);
  const adminDataItems = reducerData.deptWiseUserCount;
  const materializeUIClasses = useStyles();
  console.log("adminDataItems :",adminDataItems)
  let usersData = [];
  let deptList =[];
  adminDataItems && adminDataItems.map((users) => {
    usersData.push(users.value);
    deptList.push(users.name);
  })
  const state = {
    labels: deptList,
    datasets: [
      {       
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
        <CardHeader title={"Department Wise Users"} style={{ backgroundColor: '#000059', opacity: '0.9', textAlign: 'center' }} classes={{ title: materializeUIClasses.headerTitle }} ></CardHeader>
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
export default withReducer('userType', reducer)(UserTypeChart);
