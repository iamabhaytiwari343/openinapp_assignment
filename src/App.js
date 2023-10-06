
import './App.css';
import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Board from './Components/Dashboard/Board';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* <Route exact path="/" element={<h1>Home Page</h1>} /> */}
          <Route exact path="/" element={<Login />} />
          <Route exact path="signup" element={<Signup />} />
          {/* <Route exact path="3" element={<Board />} /> */}
          <Route exact path="/home" element={<Board />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
