import React, {useState} from 'react'
import './auth.css'

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)
    const [error, setError] = useState(null)

    const viewLogin = (status) => {
        setError(null)
        setIsLogin(status)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!isLogin && password !== confirmPassword){
            setError('Passwords dont match')
            return
        }

        // await fetch()
    }


    return (
    <div className='auth-container'>
        <div className='auth-container-box'>
            <div className='auth-options'>
                <button onClick={() => viewLogin(false)}
                >Sign-up</button>
                <button onClick={() => viewLogin(true)}>Login
                </button>
            </div>
            <form>
                <h2>{isLogin ? 'Please log in' : 'Please sign up'}</h2>
                <input type="email" placeholder='Email'></input>
                <input type="password" placeholder='Password'></input>
                {!isLogin && <input type="password" placeholder='Password'></input>}
                <input type="submit" className='create-button'></input>
                {error && <p>{error}</p>}
            </form>
        </div>
    </div>
    )
}

export default Auth
