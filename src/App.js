import Login from './Components/Authentication/Login';
import Signup from './Components/Authentication/Signup';
import DashBoard from './Components/Dashboard/DashBoard';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Login />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="/temp" element={<DashBoard />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
