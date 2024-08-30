import { useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.item);
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(clearCart());
    };
    return (
        <div className="text-center">
                <h1 className="font-bold text-2xl m-4">Cart</h1>
                <button onClick={handleClick} className="p-2 m-2 bg-slate-400 rounded-lg">Clear Cart</button>
            <div className="w-6/12 m-auto">
                <ItemList items={cartItems}/>
            </div>
        </div>
    )
};
export default Cart;
