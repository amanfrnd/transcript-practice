import React from 'react'

interface IPROPS{
    name:String,
    email:String
    age?:number
}

const FnComponent:React.FC<IPROPS> = ({name,email,age}) => {
  return (
    <div>
      <h3>Fn Component</h3>
      <h4>{`${name} with ${email}`}</h4>
      <p>{age}</p>
    </div>
  )
}

export default FnComponent
