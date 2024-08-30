import { useState, useEffect} from "react";

const useActive = () => {
    const [activity, setActivity] = useState(true);
    useEffect(() => {
        window.addEventListener("offline", () => {
            setActivity(false);
        });
        window.addEventListener("online", () => {
            setActivity(true);
        })
    },[]);
    
    return activity;
}
export default useActive;