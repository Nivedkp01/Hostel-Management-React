import logo from './logo.svg';
import './App.css';
import Dinner from './Dinner';
import Tea from './Tea';
import { BrowserRouter as Router,Link,Route,Routes } from 'react-router-dom';
import Lunch from './Lunch';
import home from './home';
import Signup from './signup';
import Login from './Login';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path='/' Component={home}></Route>
        <Route path='/tea' Component={Tea} ></Route>
        <Route path='/lunch' Component={Lunch}></Route>
        <Route path='/dinner' Component={Dinner}></Route>
        <Route path='/signup' Component={Signup}></Route>
        <Route path='/login' Component={Login}></Route>
      </Routes>
    </Router>

    </div>
  );
}

export default App;
