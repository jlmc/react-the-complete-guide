import classes from './MealItemForm.module.css';
import Input from "../../UI/Input";
import {useRef, useState} from "react";

const MealItemForm = (props) => {

    const amountInputRef = useRef();

    const [isValid, setIsValid] = useState(true);


    function addItemHandler(event) {
        event.preventDefault();

        const amountValueAsText = amountInputRef.current.value;
        const amountValueAsNumber = +amountValueAsText;


        if (amountValueAsText.trim().length === 0 || amountValueAsNumber < 1 || amountValueAsNumber > 5) {
            // 'The Meal amount should be a number between 1 and 5!'
            setIsValid(true)

            return;
        }

        props.onAddToCart(amountValueAsNumber)
    }

    return (
        <form className={classes.form} onSubmit={addItemHandler}>
            <Input

                ref={amountInputRef}

                label='Amount'
                input={{
                    id: 'amount_' + props.id,
                    type: 'number',
                    min: '1',
                    max: '5',
                    step: '1',
                    defaultValue: '1',
                }}
            />
            <button>+ Add</button>

            {!isValid && <p>The Meal amount should be a number between 1 and 5!</p>}
        </form>


    );
};

export default MealItemForm;
