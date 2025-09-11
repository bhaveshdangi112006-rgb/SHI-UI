import{NavLink} from "react-router-dom";
 function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">SudhaarX</div>

      <ul className="nav-links">
        <li><NavLink to="/report">Report an Issue</NavLink></li>
        <li><NavLink to="/explore">Explore Issue</NavLink></li>
        <li><NavLink to="/about">About</NavLink></li>
      </ul>

      <div className="profile"></div>
    </nav>
  );
}

export default Navbar;