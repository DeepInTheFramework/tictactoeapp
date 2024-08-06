import { useDispatch, useSelector } from "react-redux"
import { decrement } from "../features/counter/counterSlice";
import { useEffect, useState } from "react";


    function Counter () {
        const dispatch = useDispatch() 
        const counterValue = useSelector((state) => state.counter.value);
        const [timer, setTimer] = useState(0)

        useEffect(() => {
            const interval = setInterval(() => {
                dispatch(decrement());
            }, 1000);
        
            return () => clearInterval(interval); // Cleanup the interval on component unmount
        }, [dispatch]);

        useEffect (() => {
            setTimer(counterValue)
        }, [counterValue])

        return (
                    <>
                    {timer}
                    </>
        )

    }

    export default Counter;