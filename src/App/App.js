import './App.css';
import '../components/SideMenu'
import { CssBaseline } from '@material-ui/core'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux'
import store from '../store/index';
import React from 'react';
import Login from '../pages/Login/Login'
import History from '../@history';
import Dashboard2 from '../pages/Dashboard/Dashboard2'



// const useStyles = makeStyles({
//   appMain: {
//     paddingLeft: '320px',
//     width: '100%'
//   }
// })

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
            <Route path="/login" element={<Login />}  ></Route>
            <Route path="/dashboard" element={<Dashboard2 />}></Route>
            {/* <Route exact path='/admin/dashboard' element={<Dashboard/>} /> */}

          </Routes>
        </React.Suspense>
        </Router>
        <CssBaseline />
        {/* //adding CSS common rules */}
      </Provider>

    </>
  );
}

export default App;
