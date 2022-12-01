import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Login from "./Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path='/checkout' element={<><Header /> <Checkout /></>} />
          <Route path='/' element={<><Header /> <Home /></>} >
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
