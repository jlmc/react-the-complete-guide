import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import {useEffect, useState} from "react";
import {BACKEND_URL} from "../utils";

/*
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

 */


const AvailableMeals = (props) => {
    
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [httpError, setHttpError] = useState(null);

    useEffect(() => {

        const fetchMeals = async () => {
            setIsLoading(true);
            const response = await fetch(`${BACKEND_URL}/means.json`)

            if (!response.ok) {
                throw new Error('Something went wrong!!!')
            }


           const responseData = await response.json();

            const loadedMeals = [];
            for (const key in responseData) {
                loadedMeals.push({
                    id: key,
                    name: responseData[key].name,
                    description: responseData[key].description,
                    price: responseData[key].price
                });
            }

            console.log(loadedMeals)
            setMeals(loadedMeals);
            setIsLoading(false);

        }
            fetchMeals().catch(error => {
                setHttpError(error.message)
                setIsLoading(false);

            });

    }, []);

    if (httpError) {
        return <p className={classes.httpError}>{httpError}</p>
    }

    if (isLoading) {
        return <p className={classes.mealsLoading}>Loading ...</p>
    }

    const mealsItemsElements =
        //DUMMY_MEALS.map(y =>  <li key={y.id}>{y.name}</li>)
        meals.map(y =>
            <MealItem
                key={y.id}
                id={y.id}
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
