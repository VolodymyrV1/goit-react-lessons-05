// import { useState } from "react";

/**
 * - Зберігає стан count
 * - Збільшує поточне значення count при onClick
 * - Рендериться у App
 */

interface ClickCounterProps {
    onIncrement: () => void;
    onDecrement: () => void;
}


export default function ClickCounter({
    onIncrement,
    onDecrement
}: ClickCounterProps) {
    
    return (
        <>
            <button onClick={onDecrement}> - </button>
            <button onClick={onIncrement}> + </button>
        </>
    );
}


// export default function ClickCounter() {
//     const [count, setCount] = useState<number>(0);


//     const handleClick = () => {
//         // setCount(count + 1);
//         setCount(prevCount => prevCount + 1)
//         console.log(count);
//     };

//     const handleReset = () => {
//         setCount(0);
//     };


//     return (
//         <div>
//         <button onClick={handleClick}>Click me</button>
//         <button onClick={handleReset}>Reset</button>
//         <span>{count}</span>
//         </div>
//     );