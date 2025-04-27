import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateBlog from './components/CreateBlog';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blogs from './pages/Blogs'; // Make sure these exist
import Login from './components/Login';
import Signup from './components/Signup';
import { ToastContainer } from 'react-toastify';


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer position="top-right" autoClose={5000} hideProgressBar={false} newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Routes>
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
