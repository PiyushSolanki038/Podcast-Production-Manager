import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Podcast Manager</h1>
      <div className="nav-links">
        <Link to="/">Dashboard</Link>
        <Link to="/script-editor">Script Editor</Link>
        <Link to="/schedule">Schedule</Link>
        <Link to="/guests">Guests</Link>
        <Link to="/analytics">Analytics</Link>
        <Link to="/equipment">Equipment</Link>
        <Link to="/distribution">Distribution</Link>
      </div>
    </nav>
  );
}

export default Navbar;