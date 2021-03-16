import Home from './components/Home';
import Access from './components/Access';
import Ingest from './components/Ingest';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/access">
            <Access />
          </Route>
          <Route path="/ingest">
            <Ingest />
          </Route>
        </Switch>        
      </div>
    </Router>    
  );
}

export default App;
