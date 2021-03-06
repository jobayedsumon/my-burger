import React from "react";
import Auxiliary from "../../../hoc/Auxiliary";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return <li key={igKey} style={{textTransform: "capitalize"}}>{igKey}: {props.ingredients[igKey]}</li>
        });

    return (
      <Auxiliary>
          <h1>Your Order</h1>
          <p>A delicious burger with the following ingredients: </p>
          <ul>
              {ingredientSummary}
          </ul>
          <p><strong>Total price: ${props.price.toFixed(2)}</strong></p>
          <Button btnType="Danger" clicked={props.purchaseCancelled}>CANCEL</Button>
          <Button btnType="Success" clicked={props.purchaseContinued}>CONTINUE</Button>
      </Auxiliary>
    );
}

export default orderSummary;