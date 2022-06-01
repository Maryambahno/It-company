import { NavLink } from "react-router-dom";
import "./style.css";
const Navbar = () => {
  return (
    <div className="navbar">
      <NavLink to ="/" className="logo">
        <h1>IT-Company</h1>
       </NavLink>
       <nav className="nav">
        <li><NavLink className="link" to="/">Home</NavLink></li>
        <li><NavLink className="link" to="/about">About</NavLink></li>
        <li><NavLink className="link" to="/contact">Contact</NavLink></li>
        <li><NavLink className="link" to="/jobs">Jobs</NavLink></li>
      </nav>
    </div>
  );
};
export default Navbar;
