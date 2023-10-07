import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import Board from './Components/Dashboard/Board';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/home" element={<Board />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
