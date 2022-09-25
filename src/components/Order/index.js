import React from "react";

import css from "./style.module.css";

const Order = (props) => {
  return (
    <div className={css.Order}>
      <p>
        Ingredients : Bacon- {props.order.orts.bacon}, Salad-{" "}
        {props.order.orts.salad}, Beef- {props.order.orts.meat}, Cheese-{" "}
        {props.order.orts.cheese}
      </p>
      <p>
        Address : {props.order.hayag.name} | {props.order.hayag.street} |
        {props.order.hayag.city}
      </p>
      <p>
        Total Price : $<strong>{props.order.dun}</strong>
      </p>
    </div>
  );
};

export default Order;
