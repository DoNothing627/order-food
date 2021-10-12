import React from "react"
import MealImg from "../../assets/meals.jpg"
import classes from "./Header.module.css"
import HeaderCartButton from "./HeaderCartButton"

export default function Header(props) {
    return <>
        <header className={classes.header}>
            <h1>ReactMeals</h1>
            <HeaderCartButton onOpenCart={props.onOpenCart}>Cart</HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src={MealImg}></img>
        </div>
    </>
}