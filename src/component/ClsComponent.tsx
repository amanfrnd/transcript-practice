import { Component } from 'react'

interface IPROPS{
    userId:number,
    username:String
}

export default class ClsComponent extends Component<IPROPS> {
    constructor(props:IPROPS){
        super(props)
    }
  render() {
    let {userId,username}=this.props
    return (
      <div>
        <h3>UserId : {userId}</h3>
        <p>Username : {username}</p>
      </div>
    )
  }
}
