import React,{useState} from 'react'
import { IUserMap } from '../models/IUserMap'
interface IState{
    users:IUserMap[]
}

const TableMap = () => {
    const [state,setState]=useState<IState>({
        users:[
            {SNo:1,name:'aman',age:28},
            {SNo:2,name:'akash',age:29},
            {SNo:3,name:'mithun',age:26},
        ]
    })
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <td>SNo</td>
                    <td>Name</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {
                    state.users.map.length > 0 && state.users.map((user)=>(
                        <tr key={user.SNo}>
                            <td>{user.SNo}</td>
                            <td>{user.name}</td>
                            <td>{user.age}</td>
                        </tr>
                    ))
                }
            </tbody>
        </table>
    </div>
  )
}

export default TableMap
