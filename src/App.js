import Dashboard from './components/Dashboard';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">      
      <div className="content">
        <Navbar />  
        <div className="vertical-sections">
          <div className="sidebar">
            <Sidebar /> 
          </div> 
          <div className="content-section">
            <Dashboard />  
          </div> 
        </div>     
           
      </div>      
    </div>    
  );
}

export default App;
