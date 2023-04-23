import React, {useState } from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
// importing components
import Header from './components/HeaderF/Header';
import Listened from "./components/ListenedF/Listened";
import Signup from './components/UsersF/Signup';
import SignIn from './components/UsersF/SignIn';
import FavList from './components/FavouriteListF/FavList'; 
import Home from './components/Home';
import Alert from './components/Alert';
import UserProfile from './components/UserProfileF/UserProfile';


function App() {
  const [user, setUser] = useState(null);
  const [alert, setAlert] = useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500);
  }

  const handleLogin = (username, password) => {
    // Make API call to authenticate user
    setUser(username);
  }

  const handleLogout = () => {
    // Make API call to log out user
    setUser(null);
  }

  return (
      <div>
        <Header user={user} onLogout={handleLogout} />
        <Alert alert={alert}/>
          <Routes>
            <Route exact path="/" element={ <Home showAlert={showAlert}/>} />
            <Route exact path="/home" element={ <Home showAlert={showAlert} />} />
            <Route exact path="/listened" element={ <Listened showAlert={showAlert} />}/>
            <Route exact path="/watchlist" element={ <FavList showAlert={showAlert} />}/>
            <Route exact path="/signin/" element={<SignIn showAlert={showAlert}/>}/>  
            <Route exact path="/signup/" element={<Signup showAlert={showAlert}/>}/>
            <Route exact path="/profile/" element={<UserProfile showAlert={showAlert}/>}/>
          </Routes>
      </div>
  );
}

export default App;

