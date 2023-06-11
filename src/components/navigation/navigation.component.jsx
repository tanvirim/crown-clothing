import { Outlet } from "react-router-dom";
import { ReactComponent as CrownLogo } from "../../assets/crown-logo.svg";
import { NavLink } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import "./navigation.scss";

const Navigation = () => {
  return (
    <div>
      <nav className="nav-container">
        <div className="nav-left">
          <NavLink to="/" className="nav-link">
            <CrownLogo className="nav-logo" />
          </NavLink>
        </div>

        <div className="nav-right">
          <NavLink to="/shop" className="nav-shop nav-link">
            Shop
          </NavLink>

          <NavLink to="/" className="nav-link nav-contact">
            contact
          </NavLink>

          <NavLink to="/signin" className="nav-link nav-signin">
            sign in
          </NavLink>

          <NavLink to="/" className="nav-link nav-cart">
            <ShoppingCartIcon />
          </NavLink>
        </div>
      </nav>
      <Outlet />
    </div>
  );
};

export default Navigation;
