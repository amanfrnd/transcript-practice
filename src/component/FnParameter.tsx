import React,{useState} from 'react'
interface IGreet{
    message:String
}
const FnParameter:React.FC = () => {
    const [state,setState]=useState<IGreet>({message:'Welcome'})
    const handleGreet=(greet:String):void=>{
        setState({message:greet})
    }
  return (
    <div>
      <h3>{state.message}</h3>
      <button onClick={()=>handleGreet('LIKE')}>LIKE</button>
      <button onClick={()=>handleGreet('COMMENT')}>COMMENT</button>
      <button onClick={()=>handleGreet('SUBSCRIBE')}>SUBSCRIBE</button>
    </div>
  )
}

export default FnParameter
