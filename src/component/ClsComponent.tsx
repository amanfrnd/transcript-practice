import { Component } from 'react'


interface Istate{
  names:String,
  title:String
}

interface IPROPS{
    userId:number,
    username:String
}

export default class ClsComponent extends Component<IPROPS,Istate> {
    constructor(props:IPROPS){
        super(props)
        this.state={
          names:"Anushka Shetty",
          title:'Actress'
        }
    }
  render() {
    let {userId,username}=this.props
    let {names,title}=this.state
    const handleChange=()=>{
      this.setState({
        names:'Chritiana Ronaldo',
        title:'Footballer'
      })
    }
    return (
      <div>
        <h1>Class Component</h1>
        <h3>UserId : {userId}</h3>
        <p>Username : {username}</p>
        <div>
            <h4>Names:{names}</h4>
            <h4>Title:{title}</h4>
            <button onClick={handleChange}>Change State</button>
        </div>
      </div>
    )
  }
}
