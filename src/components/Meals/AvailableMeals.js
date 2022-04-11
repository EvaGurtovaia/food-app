import { v4 as uuidv4 } from "uuid";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const dummyMeals = [
    {
        id: uuidv4(),
        name: "Sushi",
        description: "Finest fish and veggies",
        price: 22.99,
    },
    {
        id: uuidv4(),
        name: "Schnitzel",
        description: "A german specialty!",
        price: 16.5,
    },
    {
        id: uuidv4(),
        name: "Barbecue Burger",
        description: "American, raw, meaty",
        price: 12.99,
    },
    {
        id: uuidv4(),
        name: "Green Bowl",
        description: "Healthy...and green...",
        price: 18.99,
    },
];

const AvailableMeals = () => {
    const mealsList = dummyMeals.map((meal) => (
        <li>
            {" "}
            <MealItem
                id={meal.id}
                key={meal.id}
                name={meal.name}
                description={meal.description}
                price={meal.price}
            />
        </li>
    ));
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    );
};

export default AvailableMeals;
