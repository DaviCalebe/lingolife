import { useState } from 'react';
import './login.scss';
import Footer from '../../components/footer/footer.tsx';
import Seta from '../../assets/seta-direita.png';
import EyeOpen from '../../assets/eye.png'; 
import EyeClosed from '../../assets/eye-closed.png'; 
import Header from '../../components/header/header.tsx';

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState(false);

  // Função para alternar visibilidade da senha
  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <main>
      <Header />
      <div className="login-container">
        <div className="login-card">
          <h2>Que bom ter você de volta</h2>
          <p>Email</p>
          <input className="email" placeholder="Digite seu email" />
          <p>Senha</p>
          <div className="password-container">
            <input
              className="password"
              type={passwordVisible ? 'text' : 'password'}
              placeholder="Digite sua senha"
            />
            <span className="eye-icon" onClick={togglePasswordVisibility}>
              <img src={passwordVisible ? EyeOpen : EyeClosed} alt="Mostrar senha" />
            </span>
          </div>
          <p className="text">
            Não tem conta? <a href="#">Crie agora</a>
          </p>
          <button className="button-login">
            <img src={Seta} alt="Seta" />
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Login;