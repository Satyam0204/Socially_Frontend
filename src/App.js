
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

function App() {
  return (
    <div className="App">
      <Router>
        <AuthProvider>

        <Header/>
      
        <Routes>
        
          <Route exact path='/' element={<PrivateRoute><Home/></PrivateRoute>}/>          
          <Route path='/post/:id' element={<PrivateRoute><PostPage/></PrivateRoute>}/>         
          <Route path='/user' element={<PrivateRoute><UserPage/></PrivateRoute>}/>         
          <Route path='/login' element={<Login />} />          
          <Route path='/register' element={<Register />} />          

        </Routes>
        </AuthProvider>
      </Router>
    </div>

  );
}

export default App;
