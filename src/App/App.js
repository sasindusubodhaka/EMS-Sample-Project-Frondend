import './App.css';
import '../components/SideMenu'
import SideMenu from '../components/SideMenu';
// import SideMenuWithStyle from '../components/SideMenuWithStyle';
import { CssBaseline, makeStyles } from '@material-ui/core'
import Header from '../components/Header';
import PageHeader from '../components/PageHeader';
import PeopleOutlineTwoTone from '@material-ui/icons/PeopleOutlineTwoTone';
import Employees from '../pages/Employees/Employees';
import { BrowserRouter as Router, Route,Routes} from 'react-router-dom';
import { Provider } from 'react-redux'
import history from '../@history'
import store from '../store/index';
import React from 'react';

const Login = React.lazy(() => import('../pages/Login/Login'))

const useStyles = makeStyles({
  appMain: {
    paddingLeft: '320px',
    width: '100%'
  }
})

const loading = (
  <div className='pt-3 text-center'>
    <div className='sk-spinner sk-spinner-pulse'></div>
  </div>
)

function App() {
  const classes = useStyles();
  return (
    <>
      <Provider store={store}>
        <Router history={history}>
        <React.Suspense fallback={loading}>
          <Routes>
            <Route path='/' element={<Login />} />
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
