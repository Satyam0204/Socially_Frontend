
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import './App.css';
import PrivateRoute from './components/PrivateRoute'
import Home from "./pages/Home";
import Login from "./pages/Login";

import {AuthProvider} from './Contexts/Authcontext';

import Header from './components/Header';

import Register from "./pages/Register";
import PostPage from "./pages/PostPage";
import UserPage from "./pages/UserPage";
import ProfilePage from "./pages/ProfilePage";
import Navbar from "./components/Navbar/Navbar";


function App() {
  return (
    <div className="App bg-gradient-to-r from-[#2c074f]   to-[#251c29] ">
      <Router>
        <AuthProvider>

        <Header/>
        <div className="grid grid-cols-4">
        <div className="col-span-1">

        <Navbar />
        </div>
      <div className='col-span-2'>

        <Routes >
        
          <Route  exact path='/' element={<PrivateRoute><Home/></PrivateRoute>}/>          
          <Route path='/post/:id' element={<PrivateRoute><PostPage/></PrivateRoute>}/>         
          <Route path='/user' element={<PrivateRoute><UserPage/></PrivateRoute>}/>         
          <Route path='/profile/:id' element={<PrivateRoute><ProfilePage/></PrivateRoute>}/>         
          <Route path='/login' element={<Login />} />          
          <Route path='/register' element={<Register />} />          

        </Routes>
      </div>
        </div>
        </AuthProvider>
      </Router>
    </div>

  );
}

export default App;
