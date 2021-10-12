import React, { useContext } from "react";
import classes from "./MealItem.module.css"
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

export default function MealItem(props) {
    const price = `$${props.meal.price.toFixed(2)}`

    const cartCtx = useContext(CartContext);
    const addToCartHandler = (amount) => {
        cartCtx.addItem({
            id: props.meal.id,
            name: props.meal.name,
            amount: amount,
            price: props.meal.price
        })
    }

    return <>
        <div className={classes.meal}>
            <div>
                <div><h3> {props.meal.name} </h3> </div>
                <div className={classes.decription}> {props.meal.decription}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm id={props.meal.id} onAddToCart={addToCartHandler} />
            </div>
        </div>
    </>
}