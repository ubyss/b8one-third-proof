import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import { useMutation } from "@apollo/client";
import { useNavigate } from "react-router-dom";
import { SIGN_IN } from "../../graphql/signIn";

import { SignIn } from "../../typings/login";

import "../../styles/Login/style.scss";

import Cookies from 'js-cookie'


const Login = () => {
  const navigate = useNavigate();
  const [password, setPassword] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [sendWarning, setSendWarning] = useState<Boolean>(false);
  const [passwordHidden, setPasswordHidden] = useState<Boolean>(false);

  const [SignInPage, { data, error }] = useMutation<SignIn>(SIGN_IN);
  
  useEffect(() => {
    if (data) {

      Cookies.set("token", data.signIn.token)
      localStorage.setItem("user", JSON.stringify(data.signIn.user));
      navigate("/dashboard");
    }
  }, [data]);

  useEffect(() => {
    if (error) setSendWarning(true)
  }, [error]);

  const signIn = () => {
    SignInPage({ variables: { input: { email, password } } });
  };
  return (
    <>
      <header className="logo-container">
        <h1 className="logo-title">
          Academy
          <span className="highlight-title"> Store</span>
        </h1>
      </header>
      <div className="login-modal">
        <h2 className="login-modal__welcome-message">
          Olá, entre com e-mail e senha.
        </h2>
        <form className="login-modal__form">
          <div className="login-modal__container--email">
            <label
              className={`login-modal__label ${sendWarning ? "warning" : null}`}
              htmlFor="login-modal__input--email">
              Seu e-mail
            </label>
            <input
              className={`login-modal__input login-modal__input--email ${sendWarning ? "input-warning" : null}`}
              type="text"
              placeholder="exemplo@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="login-modal__container--password">
            <div className="container--password__header">
              <Link to="/">
                <span className="container--password__forgot-link">
                  Esqueci minha senha
                </span>
              </Link>
              <label
                className={`login-modal__label ${sendWarning ? "warning" : null}`}
                htmlFor="login-modal__input--password">
                Senha
              </label>
            </div>
            <div className="login-modal__input--password">
              <input
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className={`login-modal__input login-modal__input--password ${sendWarning ? "input-warning" : null}`}
                type={passwordHidden ? "text" : "password"}
                placeholder="Digite sua senha"
              />
              <span 
                className="input-password__container-svg" 
                onClick={() => {setPasswordHidden(!passwordHidden)}}>
              </span>
            </div>
          </div>
          <div className="login-modal__container-checkbox">
            <input type="checkbox" className="container-checkbox--input" />
            <label
              className="container-checkbox--label"
              htmlFor="login-modal__input--keeplogin">
              Manter conectado
            </label>
          </div>
        </form>
        <button onClick={signIn} className="login-modal__submit">
          Entrar
        </button>
        <div className="go-to-register__container">
          <Link className="go-to-register__link" to="/">
            Não possui conta? Cadastre-se
          </Link>
        </div>
      </div>
    </>
  );
};

export default Login;
