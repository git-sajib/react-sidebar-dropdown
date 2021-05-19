import './App.css';
import Sidebar from './components/Sidebar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Overview from './pages/Overview';
import { Reports, ReportsOne, ReportsTwo } from './pages/Reports';
import Team from './pages/Team';

function App() {
  return (
    <BrowserRouter>
      <Sidebar />
      <Switch>
        <Route path='/overview' exact component={Overview} />
        <Route path='/reports' exact component={Reports} />
        <Route path='/reports/reports1' exact component={ReportsOne} />
        <Route path='/reports/reports2' exact component={ReportsTwo} />
        <Route path='/team' exact component={Team} />
        {/* <Redirect to='/reports' from='/'/> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
