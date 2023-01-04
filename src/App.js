import './App.css';
import {Provider} from 'react-redux'
import {BrowserRouter as Router, Routes,Route,Link} from 'react-router-dom'
import Login from './Login';
import { store } from './store';
import Home from './Home';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
       <Router>
        <Link to='/'> Home </Link>
        <Link to='/login'> Login </Link>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
        </Routes>
       </Router>
      </Provider>
    </div>
  );
}

export default App;
