import './App.css';
import { Link } from 'react-router-dom';
function NavComponent() {

  const navLinkStyle = {
    color: 'white'
  };

  return (
    <nav>
      <Link style={navLinkStyle} to="/">
        <h3>Project Manager PlayBook</h3>
      </Link>
      <ul className="nav-links">
        <Link style={navLinkStyle} to="/playbook">
          <li>PLAYBOOK</li>
        </Link>
        <Link style={navLinkStyle} to="/about">
          <li>ABOUT</li>
        </Link>
      </ul>
    </nav>
  );
}

export default NavComponent;