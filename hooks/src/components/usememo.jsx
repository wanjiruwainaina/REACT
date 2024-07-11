
import Counter from "./counter";
import { useState,useMemo,useEffect } from "react";

function HooksUseMemo(){
    let [count,setCount]=useState(0)

    function someAction(){
        let i
        for(i=0;i<=100000;i++){

        }
        return i
    } 

    useMemo(()=>{
        someAction()

    }, [])

    function increase() {
        setCount(prevCount =>prevCount + 1)  
    }
    function decrease() {
        setCount(prevCount =>prevCount - 1)
    }
    function reset() {
        setCount(0)
    }
return(
    <>
    <Counter count={count} increasefunction={increase} decreasefunction={decrease}resetfunction={reset}/>
    </>
)

}
export default  HooksUseMemo