import { useRouteError } from 'react-router-dom';

const Err = () => {
    const errMsg = useRouteError();
    console.log(errMsg);
    return (
        <div>
            <h1>OOPS!!!!</h1>
            <h1>{errMsg.status}:{errMsg.statusText }</h1>
        </div>
    )
}
export default Err;