import {useState} from 'react'

interface ICounter{
    count:number
}

const Counter:React.FC = () => {
    const [counter,setCounter]=useState<ICounter>({count:0})
    const handleInc=()=>{
        setCounter({count:counter.count+1})
    }
    const handleDec=()=>{
        setCounter({count:counter.count-1})
    }
  return (
    <div>
      <h3>{counter.count}</h3>
      <button onClick={handleInc}>INC</button>
      <button onClick={handleDec}>DEC</button>
    </div>
  )
}

export default Counter
