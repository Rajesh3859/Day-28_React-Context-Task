import React from "react";
import { useUserContext } from "../ContextProvider";

function Header() {
  const { cardQuantity, cardAmount } = useUserContext();

  return (
    <>
      <header
        // className="bg-light headercss "
        style={{ width: "100%", height: "100%" }}
      >
        <div className="d-flex">
          <div className="col">TOTAL QTY: {cardQuantity}</div>
          <div className="col">TOTAL Price : {cardAmount.toFixed(2)}</div>
          <div className="col-auto pay">
            <button className="btn btn-primary">Proceed to pay</button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;
