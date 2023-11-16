import './App.css';
import Login from './components/Login';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Jobs from './components/Jobs';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoutes from './components/PrivateRoutes';

function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route element={<PrivateRoutes />}>
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/jobs" element={<Jobs />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
