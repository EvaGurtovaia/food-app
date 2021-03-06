import Modal from "../UI/Modal";
import classes from "./Cart.module.css";

const Cart = (props) => {
    const cartItems = (
        <ul className={classes["cart-items"]}>
            {[{ id: "c1", name: "Sushi", amount: 1, price: "12.99" }].map(
                (item) => (
                    <li>{item.name}</li>
                )
            )}
        </ul>
    );
    return (
        <Modal>
            {cartItems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>12.99</span>
            </div>
            <div className={classes.actions}>
                <button className={classes["button--alt"]}>
                    Continue shopping
                </button>
                <button className={classes.button}>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
