"use client";
import { useShoppingCart } from "../../../hook/useShoppingCart";
import { FaShoppingCart } from "react-icons/fa";
import styles from './ShoppingCart.module.sass'

export const ShoppingCart = () => {
    const { cart } = useShoppingCart();

    return (
        <button className={styles.ShoppingCart}>
            <span className={styles.ShoppingCart__counter}>
                {cart.length}
            </span>
            <FaShoppingCart />
        </button>
    )
}