import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
    return (
        <form className={classes.form}>
            <Input
                label="Amount"
                input={{
                    id: props.id,
                    type: "number",
                    min: "1",
                    max: "5",
                    step: "1",
                    defaultValue: "1",
                }}
            />
            <button>+</button>
            <button>-</button>
            <button>Add to bag</button>
        </form>
    );
};

export default MealItemForm;
