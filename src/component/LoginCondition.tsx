import React,{useState} from 'react'

interface Ilogin{
    isLogin:boolean
}

const LoginCondition = () => {
    const [state,setState]=useState<Ilogin>({
        isLogin:false
    })

    const handleLogout=():void=>{
        setState({
            isLogin:false
        })
    }
    const handleLogin=():void=>{
        setState({
            isLogin:true
        })
    }
  return (
    <div>
        {
            state.isLogin && state.isLogin ? 
            (
                <h3>Welcome</h3>
            ):
            (
                <h3>Please Login First</h3>
            )
        }
        {
            state.isLogin && state.isLogin ?
            (
                <button onClick={handleLogout}>Logout</button>
            ):
            (
                <button onClick={handleLogin}>Login</button>
            )
        }
    </div>
  )
}

export default LoginCondition
