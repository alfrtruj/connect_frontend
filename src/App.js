import Home from './components/Home';
import Access from './components/Access';
import Ingest from './components/Ingest';
import Aip from './components/Aip';
import Reports from './components/Reports';
import Processing from './components/Processing';
import OfflineStorage from './components/OfflineStorage';
import Status from './components/Status';
import OfflineBrowse from './components/OfflineBrowse';
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
          <Route path="/reports">
            <Reports />
          </Route>
          <Route path="/processing">
            <Processing />
          </Route>
          <Route path="/offlinestorage">
            <OfflineStorage />
          </Route>
          <Route path="/status">
            <Status />
          </Route>
          <Route path="/offlinebrowse">
            <OfflineBrowse />
          </Route>
        </Switch>        
      </div>
    </Router>    
  );
}

export default App;
