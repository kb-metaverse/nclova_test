import { useEffect, useState } from "react";


const Counter = () => {


    useEffect(() => {
        console.log("Count Init");
    },[]);

    const [count, setCount] = useState(0);

    const addHandlerEvent = () => {

        console.log(111)
        setCount(count + 1);

    }

    const minusHandlerEvent = () => {
        setCount(count - 1);
    }

    return (
        <div>
            <div>{count}</div>
            
            <button onClick={addHandlerEvent}>+</button>
            <button onClick={minusHandlerEvent}>-</button>
        </div>
    );
}

export default Counter;