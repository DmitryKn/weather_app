import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, Redirect } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import GetInfo from './Pages/GetInfo';
import Result from './Pages/Result';
import Error from './Pages/Error';
import { useGlobalContext } from './context';

function App() {
  const { weatherData } = useGlobalContext();
  const apiData = weatherData?.name;

  return (
    <div className='container'>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/getinfo' component={GetInfo} />
        <Route exact path='/result'>
          {apiData ? <Result /> : <Redirect to='/error' />}
        </Route>
        <Route exact path='/error' component={Error} />
      </Switch>
    </div>
  );
}

export default App;
