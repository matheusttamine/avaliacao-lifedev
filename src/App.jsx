import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Dashboard from './pages/Dashboard/Dashboard'
import PostDetail from './pages/PostDetail/PostDetail';
import CreatePost from './pages/CreatePost/CreatePost';

import { useAuth } from './hooks/useAuth';
import './App.css';

const PrivateRoute = ({ children }) => {
  const {currentUser} = useAuth();
  return currentUser ? children : <Navigate to="/login" />
};

function App() {
  
  return (
    <BrowserRouter>
    <Navbar />
    <div className="container">
      <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>

          <Route element={<PrivateRoute />}>
          
            <Route path="/dashboard" 
            element={<Dashboard/>}/>
            <Route path="/post/:id" element={<PostDetail/>}/>
            <Route path="/post/new" element={<CreatePost/>}/>
          </Route>
          <Route path="*" element={<Navigate to="/"/>}/>
          

      </Routes>
    </div>
    <Footer />
    </BrowserRouter>
  )
}

export default App
