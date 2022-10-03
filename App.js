//import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './login/login';
import Register from './login/registration';
import Home from './home';
import Startup from './startup';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Startup/>} />
          <Route path='/startup' element={<Startup/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/registration" element={<Register/>}/>
          <Route path="/home" element={<Home/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
