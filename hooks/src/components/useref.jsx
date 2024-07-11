import { useState ,useRef,useEffect} from 'react'


function UserRef() {
  const [inputValue, setInputValue] = useState("")
const prevValue= useRef("")

  useEffect(()=>{
    prevValue.current= inputValue
},[inputValue])



  return (
    <>
    <h1>HOOKS</h1>
     <input
     type='text'
     value={inputValue}
     onChange={(e) =>setInputValue(e.target.value)}
     />
     <h1>previous:{prevValue.current}</h1>
    </>
  )
}

export default UserRef