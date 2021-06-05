import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
    {
        id: 'm1',
        name: 'Sushi',
        description: 'Finest fish and veggies',
        price: 22.99,
    },
    {
        id: 'm2',
        name: 'Schnitzel',
        description: 'A german specialty!',
        price: 16.5,
    },
    {
        id: 'm3',
        name: 'Barbecue Burger',
        description: 'American, raw, meaty',
        price: 12.99,
    },
    {
        id: 'm4',
        name: 'Green Bowl',
        description: 'Healthy...and green...',
        price: 18.99,
    },
];


const AvailableMeals = (props) => {
    const mealsItemsElements =
        //DUMMY_MEALS.map(y =>  <li key={y.id}>{y.name}</li>)
        DUMMY_MEALS.map(y =>
            <MealItem
                key={y.id}
                name={y.name}
                price={y.price}
                description={y.description}/>)


    return (
        <section className={classes.meals}>
            <Card>

                <ul>
                    {mealsItemsElements}
                </ul>

            </Card>
        </section>
    );
}

export default AvailableMeals;
