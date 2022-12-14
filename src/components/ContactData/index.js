import React, { useState, useEffect, useRef, useContext } from "react";
import css from "./style.module.css";
import Button from "../General/Button";
import Spinner from "../General/Spinner";
import { useHistory } from "react-router-dom";
import BurgerContext from "../../context/BurgerContext";
import UserContext from "../../context/UserContext";

const ContactData = (props) => {
  const history = useHistory();
  const userCtx = useContext(UserContext);
  const ctx = useContext(BurgerContext);
  const [name, setName] = useState();
  const [city, setCity] = useState();
  const [street, setStreet] = useState();

  const dunRef = useRef();

  useEffect(() => {
    if (ctx.burger.finished && !ctx.burger.error) {
      history.replace("/orders");
    }

    return () => {
      // Цэвэрлэгч функц : Захиалгыг буцаагаад хоосолно. Дараачийн захиалгад бэлтгэнэ гэсэн үг.
      ctx.clearBurger();
    };
  }, [ctx.burger.finished]);

  const changeName = (e) => {
    if (dunRef.current.style.color === "red")
      dunRef.current.style.color = "green";
    else dunRef.current.style.color = "red";

    setName(e.target.value);
  };

  const changeStreet = (e) => {
    setStreet(e.target.value);
  };

  const changeCity = (e) => {
    setCity(e.target.value);
  };

  const saveOrder = () => {
    const newOrder = {
      userId: userCtx.state.userId,
      orts: ctx.burger.ingredients,
      dun: ctx.burger.totalPrice,
      hayag: {
        name,
        city,
        street,
      },
    };

    ctx.saveBurger(newOrder, userCtx.state.token);
  };

  // console.log("ContactData rendered....");

  return (
    <div className={css.ContactData}>
      <div ref={dunRef}>
        <strong style={{ fontSize: "16px" }}>
          Price : ${ctx.burger.totalPrice}
        </strong>
      </div>
      <div>
        {ctx.burger.error &&
          `An error occured in your order : ${ctx.burger.error}`}
      </div>
      {ctx.burger.saving ? (
        <Spinner />
      ) : (
        <div>
          <input
            onChange={changeName}
            type="text"
            name="name"
            placeholder="Your Name"
          />
          <input
            onChange={changeStreet}
            type="text"
            name="street"
            placeholder="Input your address"
          />
          <input
            onChange={changeCity}
            type="text"
            name="city"
            placeholder="Your City"
          />
          <Button text="PURCHASE" btnType="Success" daragdsan={saveOrder} />
        </div>
      )}
      <Button text="Toggle" btnType="Success" daragdsan={ctx.toggle} />
    </div>
    // Order sending to the server/DB progress toggled
  );
};

export default ContactData;
