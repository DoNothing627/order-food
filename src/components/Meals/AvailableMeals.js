import React from "react";
import classes from "./AvailableMeals.module.css"
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const Dummy_Meals = [
    {
        id: 0,
        name: "Bún đậu mắm tôm",
        decription: "Thơm ngon tới giọt cuối cùng",
        price: 22.9
    },
    {
        id: 1,
        name: "Bánh mì bơ",
        decription: "Đối diện ktx",
        price: 4.9
    },
    {
        id: 2,
        name: "Bánh tráng trộn",
        decription: "Lần đầu mua",
        price: 19.1
    },
    {
        id: 3,
        name: "Kem tràng tiền",
        decription: "Lần đầu được mời",
        price: 14.9
    }
]

export default function AvailableMeals(props) {

    const mealist = Dummy_Meals.map(meal => <MealItem key={meal.id} meal={meal} />)

    return <>
        <section className={classes.meals}>
            <Card>
                <ul>{mealist}</ul>
            </Card>
        </section>
    </>
}