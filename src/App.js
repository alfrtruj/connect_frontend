import Home from './components/Home';
import Access from './components/Access';
import Ingest from './components/Ingest';
import Aip from './components/Aip';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/dashboard">
            <Home />
          </Route>
          <Route exact path="/browse">
            <Access />
          </Route>
          <Route path="/browse/:id">
            <Aip />
          </Route>
          <Route path="/upload">
            <Ingest />
          </Route>
        </Switch>        
      </div>
    </Router>    
  );
}

export default App;
