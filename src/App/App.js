import './App.css';
import '../components/SideMenu'
import SideMenu from '../components/SideMenu';
// import SideMenuWithStyle from '../components/SideMenuWithStyle';
import {CssBaseline, makeStyles} from '@material-ui/core'
import Header from '../components/Header';

const useStyles = makeStyles({
  appMain:{
    paddingLeft :'320px',
    width:'100%'
  }
})

function App() {
  const classes = useStyles();
  return (
    <>
      <SideMenu />
      <div className={classes.appMain}>
          <Header/>
      </div>
      <CssBaseline />
    </>
  );
}

export default App;
