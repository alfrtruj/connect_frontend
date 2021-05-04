import Home from './components/Home';
import Access from './components/Access';
import Ingest from './components/Ingest';
import Reports from './components/Reports';
import Processing from './components/Processing';
import OfflineStorage from './components/OfflineStorage';
import Status from './components/Status';
import OfflineBrowse from './components/OfflineBrowse';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import FileAnalysis from './components/FileAnalysis';
import FileUpdate from './components/FileUpdate';
import Logout from './components/Logout';
import Login from './components/Login';

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
          <Route exact path="/browse" component={Access} />  
          <Route exact path="/browse/:id" component={FileAnalysis} />
          <Route exact path="/browse/:id/update" component={FileUpdate} />
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
          <Route exact path="/logout" component={Logout} />
          <Route exact path="/login" component={Login} />
        </Switch>        
      </div>
    </Router>    
  );
}

export default App;
