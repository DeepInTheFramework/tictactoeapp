import { useDispatch, useSelector } from "react-redux"
import { decrement, incrementByAmount } from "../features/counter/counterSlice";
import { useEffect, useState } from "react";
import { Statistic } from "antd";

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

        useEffect(() => {
            if (counterValue === 1) {
                dispatch(incrementByAmount(59));
                setTimer(60);
            } else {
                setTimer(counterValue);
            }
        }, [counterValue, dispatch]);
        
        return (
                    <>
                                {timer}
                    </>
        )

    }

    export default Counter;