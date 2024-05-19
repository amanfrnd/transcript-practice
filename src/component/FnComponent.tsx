import {useState} from 'react'

interface Istate{
  names:String,
  title:String
}

interface IPROPS{
    name:String,
    email:String
    age?:number
}

const FnComponent:React.FC<IPROPS> = ({name,email,age}) => {
  const [state,setState]=useState<Istate>({
    names:'Rahul Dravid',
    title:'Cricketer'
  })

  const handleChange=()=>{
    setState({
      names:'Amitabh Bachchan',
      title:'Actor'
    })
  }
  return (
    <div>
      <h1>Fn Component</h1>
      <h4>{`${name} with ${email}`}</h4>
      <p>{age}</p>
      <div>
          <h4>Names:{state.names}</h4>
          <h4>Title:{state.title}</h4>
          <button onClick={handleChange}>Change State</button>
      </div>
    </div>
  )
}

export default FnComponent
