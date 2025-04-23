import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateBlog from './components/CreateBlog';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Blogs from './pages/Blogs'; // Make sure these exist


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
