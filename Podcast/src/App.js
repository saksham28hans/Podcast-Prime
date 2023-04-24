import React, {useState } from 'react';
import { BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import './App.css';
// importing components
import Listened from "./components/ListenedF/Listened";
import Signup from './components/UsersF/Signup';
import SignIn from './components/UsersF/SignIn';
import FavList from './components/FavouriteListF/FavList'; 
import Home from './components/HomeF/Home';
import Alert from './components/Alert';
import UserProfile from './components/UserProfileF/UserProfile';
import Watch from './components/WatchF/Watch';
import Logout from './components/Logout';


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

  

  return (
      <div>
        <Alert alert={alert}/>
          <Routes>
            <Route exact path="/" element={ <Home showAlert={showAlert}/>} />
            <Route exact path="/home" element={ <Home showAlert={showAlert} />} />
            <Route exact path="/listened" element={ <Listened showAlert={showAlert} />}/>
            <Route exact path="/watchlist" element={ <FavList showAlert={showAlert} />}/>
            <Route exact path="/signin/" element={<SignIn showAlert={showAlert}/>}/>  
            <Route exact path="/signup/" element={<Signup showAlert={showAlert}/>}/>
            <Route exact path="/profile/" element={<UserProfile showAlert={showAlert}/>}/>
            <Route exact path="/watch/" element={<Watch showAlert={showAlert}/>}/>
            <Route exact path="/logout/" element={<Logout showAlert={showAlert}/>}/>
          </Routes>
      </div>
  );
}

export default App;

