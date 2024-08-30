import ItemList from "./ItemList";
import { useState } from "react";

const RestCategories = ({ data,showItems,setShowIndex}) => {
    const [show, setShow] = useState(false);
    const [upwards, setUpwards]=useState('⬇️')

    const handleClick = () => {
        setShowIndex();
        if (upwards === '⬇️')
        {
            setUpwards('⬆️')
        }
        else {
            setUpwards('⬇️');
        }
     }
    return (
        <div>
            <div className="w-7/12 m-auto bg-gray-100 shadow-lg p-4 my-4">
                <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                    <span className="text-md font-bold">{data.title} ({data.itemCards.length})</span>
                    <span>{upwards}</span>
                </div>
                {showItems && <ItemList items={data.itemCards} />}
            </div>
        </div>
    )
};
export default RestCategories;