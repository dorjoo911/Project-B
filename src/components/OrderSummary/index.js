import React, { useContext } from "react";
import BurgerContext from "../../context/BurgerContext";
import Button from "../General/Button";

const OrderSummary = (props) => {
  const ctx = useContext(BurgerContext);
  return (
    <div>
      <h3>Your Order</h3>
      <p>Your desired ingredients: </p>
      <ul>
        {Object.keys(ctx.burger.ingredients).map((el) => (
          <li key={el}>
            {ctx.burger.ingredientNames[el]} : {ctx.burger.ingredients[el]}
          </li>
        ))}
      </ul>
      <p>
        <strong>Total order: ${ctx.burger.totalPrice} </strong>
      </p>
      <p>Is your desired order then continiue?</p>
      <Button daragdsan={props.onCancel} btnType="Danger" text="CANCEL" />
      <Button daragdsan={props.onContinue} btnType="Success" text="CONTINIUE" />
    </div>
  );
};

export default OrderSummary;
