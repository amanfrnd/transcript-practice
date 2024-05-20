import {useState} from 'react'
import { IUserMap } from '../models/IUserMap'
import { UserService } from '../services/UserService'
interface IState{
    users:IUserMap[]
}

const TableMap = () => {
    const [state,setState]=useState<IState>({
        users:UserService.getAllUsers()
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
