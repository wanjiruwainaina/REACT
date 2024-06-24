import React, {useState} from "react";
function Counter() {
    let [count,setCount] = useState(0)

    function increase (){
        setCount (++count)
    }
    function decrease (){
        setCount(--count) 

    }
    function reset (){
setCount(0)
    }


    return (
        <>
            <div className="counter">
                <div className="row">
                    <button className="btn btn-secondary" onClick={increase}>+</button>
                    <h2 className="display-6">{count}</h2>
                    <button className="btn btn-danger mb4" onClick={decrease}>-</button>
                    <button className="btn btn-warning"onClick={reset}>reset</button>
                </div>

            </div>
        </>
    )
}

export default Counter