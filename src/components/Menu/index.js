import React, { useContext } from "react";
import css from "./style.module.css";
import MenuItem from "../MenuItem";
import UserContext from "../../context/UserContext";

const Menu = (props) => {
  const ctx = useContext(UserContext);
  return (
    <div>
      <ul className={css.Menu}>
        {ctx.state.userId ? (
          <>
            <MenuItem exact link="/">
              NEW ORDER
            </MenuItem>
            <MenuItem link="/orders">YOUR ORDERS</MenuItem>
            <MenuItem link="/logout">LOG OUT</MenuItem>
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
