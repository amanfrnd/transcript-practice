import { useState } from 'react'
import { IForm } from '../models/IForm'
interface IState {
    user: IForm
}
const FormComponent = () => {
    const [state, setState] = useState<IState>({
        user: {
            email: '',
            password: ''
        }
    })

    const handleChange=(event:React.ChangeEvent<HTMLInputElement>):void=>{
        setState({
            user:{
                ...state.user,
                [event.target.name]:event.target.value
            }
        })
    }

    const handleSubmit=(event:React.FormEvent<HTMLFormElement>):void=>{
        event.preventDefault()
        console.log(state.user)
        alert('Login Success')
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h3>Form Application</h3>
                <label>Email:</label>
                <input
                    type="email"
                    placeholder="Enter Email"
                    name="email"
                    value={state.user.email}
                    onChange={handleChange}
                />
                <label>Password:</label>
                <input
                    type="password"
                    placeholder="Enter Email"
                    name="password"
                    value={state.user.password}
                    onChange={handleChange}
                />
                <button type="submit">Submit</button>
            </form>
            <h3>{JSON.stringify(state.user)}</h3>
        </div>
    )
}

export default FormComponent
