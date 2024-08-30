import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
    const dispatch = useDispatch();
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
    return (
        <div>
            {
                items.map((item) => (
                    <div className="flex justify-between">
                        <div key={item.card.info.id} className="border-b-2 w-full py-9 text-left">
                            <h1 className="font-semibold">{item.card.info.name}</h1>
                            <h3>{"₹"} {item.card.info.price/100}</h3>
                            <p className="text-gray-600">{item.card.info.description}</p>
                        </div>
                        <div className="w-3/12 p-3 border-b-2">
                            <div className="absolute">
                                <button className="px-1 my-20 mx-8 rounded-lg bg-black text-white" onClick={()=>handleAddItem(item)}>Add +</button>
                            </div>
                            <img src={CDN_URL + item.card.info.imageId} className="rounded-lg" ></img>
                        </div>
                    </div>
                    

                ))
            }
        </div>
    )
}
export default ItemList;
