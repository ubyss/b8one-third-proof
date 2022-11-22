import { Link } from 'react-router-dom'
import '../../styles/Login/style.scss'
import {useEffect, useState} from 'react'

import {useMutation, gql} from '@apollo/client'
import { useNavigate } from "react-router-dom";

const SIGN_IN = gql`
mutation signIn($input: SignInInput!){
  signIn(input: $input){
    token
    user{
      email
      name
    }
  }
}
`

type SignIn = {
    signIn: {
        token: string,
        user: {
            email: string,
            name: string
        }
    }
}
const Login = () => {

    const navigate = useNavigate();
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const [SignInPage, { data, loading, error }] = useMutation<SignIn>(SIGN_IN)

    useEffect(() => {

        if(data) navigate("/dashboard");
    }, [data])

    const signIn = () => {
        SignInPage({ variables: { input: {email, password}}})

        
    }
  return (
    <>
        <header className='logo-container'>
            <h1 className='logo-title'>
                Academy
                <span className='highlight-title'> Store</span>
            </h1>
        </header>
        <div className='login-modal'>
            <h2 className='login-modal__welcome-message'>Olá, entre com e-mail e senha.</h2>
            <form className='login-modal__form'>
                <div className='login-modal__container--email'>
                    <label className='login-modal__label' htmlFor='login-modal__input--email'>Seu e-mail</label>
                        <input className='login-modal__input login-modal__input--email' type="text" placeholder='exemplo@email.com' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='login-modal__container--password'>
                    <div className='container--password__header'>
                        <Link to='/'>
                           <span className='container--password__forgot-link'>Esqueci minha senha</span>
                        </Link>
                        <label className='login-modal__label' htmlFor='login-modal__input--password'>Senha</label>
                    </div>
                    <div className='login-modal__input--password'>
                        <input onChange={(e) => setPassword(e.target.value)} value={password} className='login-modal__input login-modal__input--password' type="password" placeholder='Digite sua senha' />  
                        <div className='input-password__container-svg'></div> 
                    </div>
                </div>
                <div className='login-modal__container-checkbox'>
                    <input type="checkbox" className='container-checkbox--input' />
                    <label className='container-checkbox--label' htmlFor='login-modal__input--keeplogin'>Manter conectado</label>
                </div>
                {/* <Link to='/dashboard'> */}

                {/* </Link> */}
            </form>
            <button onClick={signIn} className='login-modal__submit'>Entrar</button>
            <hr />
            <div className='go-to-register__container'>
                <Link className='go-to-register__link' to='/'>Não possui conta? Cadastre-se</Link>
            </div>
        </div>
    </>
  )
}

export default Login
