import Navbar from './Navbar';
import Home from './Home'

function App() {

  return (
    <div className="App">
      <Navbar title="My Blog" />
      <div className="content">
        < Home />
      </div>
    </div>
  );
}

export default App;
