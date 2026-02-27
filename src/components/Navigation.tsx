import { NavLink } from "react-router-dom";

const Navigation = () => {
  const baseStyle = "px-4 py-2 rounded-lg transition";
  const activeStyle = "bg-blue-600 text-white";
  const inactiveStyle = "bg-gray-200 text-black hover:bg-gray-300";

  return (
    <nav className="flex gap-4 p-4 shadow">

      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        Login
      </NavLink>

      <NavLink
        to="/grid"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        Grid
      </NavLink>

      <NavLink
        to="/color"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        Color Picker
      </NavLink>

    </nav>
  );
};

export default Navigation;
