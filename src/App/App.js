import './App.css';
// import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from '../store/index';
import React from 'react';
import Login from '../pages/login/Login'
import History from '../@history';
import Home from '../pages/home/Home';
import DashboardBase from '../pages/dashboard/DashboardBase';
import AddUserBase from '../pages/manageUsers/addUsers/AddUserBase';
import ViewUsersBase from '../pages/manageUsers/view/ViewUsersBase';
import CreateDeptBase from '../pages/department/createDepartment/CreateDeptBase';
import ViewDeptBase from '../pages/department/viewDepartment/ViewDeptBase';


const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
)

const App=()=> {
 
  return (
    <>
      <Provider store={store}>
        <Router history={History} forceRefresh={true}>
        <React.Suspense fallback={loading}>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login />} />
            <Route path="/admin/dashboard" element={<DashboardBase/>} />
            <Route path="/admin/viewusers" element={<ViewUsersBase/>} />
            <Route path="/admin/registerusers" element={<AddUserBase/>} />
            <Route path="/admin/createdepartment" element={<CreateDeptBase />} />
            <Route path="admin/viewdepartments" element={<ViewDeptBase />} />
            
          </Routes>
        </React.Suspense>
        </Router>
        {/* <CssBaseline /> */} 
      </Provider>

    </>
  );
}

export default App;
