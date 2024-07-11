import React from "react"
function Counter(props) {



    return (
        <>
            <div className="counter">
                <div className="row">
                    <button className="btn btn-secondary" onClick={props.increasefunction}>+</button>
                    <h2 className="display-6">{props.count}</h2>
                    <button className="btn btn-danger mb4" onClick={props.decreasefunction}>-</button>
                    <button className="btn btn-warning" onClick={props.resetfunction}>reset</button>
                </div>

            </div>
        </>
    )
}

export default Counter