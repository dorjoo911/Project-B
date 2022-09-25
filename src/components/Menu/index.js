import React, { useContext } from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";
import UserContext from "../../context/UserContext";
import jwt_decode from "jwt-decode";

const Menu = (props) => {
  const ctx = useContext(UserContext);

  return (
    <div>
      <ul className={css.Menu}>
        {ctx.state.userId ? (
          <>
            <marquee>
              <h1>User : {jwt_decode(ctx.state.token).email}</h1>
            </marquee>
            <MenuItem exact link="/">
              NewOrder
            </MenuItem>
            <MenuItem link="/orders">Orders</MenuItem>
            <MenuItem link="/logout">LogOut</MenuItem>
          </>
        ) : (
          <>
            <MenuItem link="/login">LOG IN</MenuItem>
            <MenuItem link="/signup">REGISTER</MenuItem>
          </>
        )}
      </ul>
    </div>
  );
};

export default Menu;
