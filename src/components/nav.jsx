import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "12px 20px",
        background: "#f5f5f5",
        alignItems: "center",
        position:'fixed',
        zIndex:'1',
        
      }}
    >
      <NavLink
        to="/"
        style={({ isActive }) => ({
          color: isActive ? "#0d6efd" : "#555",
          textDecoration: "none",
          fontWeight: isActive ? "700" : "500",
          borderBottom: isActive ? "2px solid #0d6efd" : "2px solid transparent",
          paddingBottom: "4px",
          transition: "all 0.2s ease-in-out"
        })}
      >
        Home
      </NavLink>

      <NavLink
        to="/ranking"
        style={({ isActive }) => ({
          color: isActive ? "#0d6efd" : "#555",
          textDecoration: "none",
          fontWeight: isActive ? "700" : "500",
          borderBottom: isActive ? "2px solid #0d6efd" : "2px solid transparent",
          paddingBottom: "4px",
          transition: "all 0.2s ease-in-out"
        })}
      >
        Student Ranking
      </NavLink>

      <NavLink
        to="/top"
        style={({ isActive }) => ({
          color: isActive ? "#0d6efd" : "#555",
          textDecoration: "none",
          fontWeight: isActive ? "700" : "500",
          borderBottom: isActive ? "2px solid #0d6efd" : "2px solid transparent",
          paddingBottom: "4px",
          transition: "all 0.2s ease-in-out"
        })}
      >
        Top Ten
      </NavLink>


       <NavLink
        to="/add"
        style={({ isActive }) => ({
          color: isActive ? "#0d6efd" : "#555",
          textDecoration: "none",
          fontWeight: isActive ? "700" : "500",
          borderBottom: isActive ? "2px solid #0d6efd" : "2px solid transparent",
          paddingBottom: "4px",
          transition: "all 0.2s ease-in-out"
        })}
      >
        Add Student
      </NavLink>
    </nav>
  );
}

export default Navbar;
