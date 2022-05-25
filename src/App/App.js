import './App.css';
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from '../store/index';
import React from 'react';
import Login from '../pages/Login/Login'
import History from '../@history';
import Home from '../pages/Home/Home';
import DashboardBase from '../pages/Dashboard/DashboardBase';


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
            <Route path="/" element={<Home/>}></Route>
            <Route path="/login" element={<Login />}></Route> 
            <Route path="/admin/dashboard" element={<DashboardBase/>}></Route> 
          </Routes>
        </React.Suspense>
        </Router>
        {/* <CssBaseline /> */}
        {/* //adding CSS common rules */}
      </Provider>

    </>
  );
}

export default App;
