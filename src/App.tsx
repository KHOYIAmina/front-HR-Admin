import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import RHPage from './pages/rh/RHPage';
import NavbarVer from './components/navbar/navbarVer/navbarVer';

// Import other pages/components

function App() {
  return (
    <Router>
      <NavbarVer />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/rh" element={<RHPage />} /
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;
