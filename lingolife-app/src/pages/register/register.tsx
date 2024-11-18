import React, { useState } from 'react';
import './register.scss'
import Header from '../../components/header/header.tsx'
import Footer from '../../components/footer/footer.tsx'
import Seta from '../../assets/seta-direita.png';
import EyeOpenIcon from '../../assets/eye.png'; 
import EyeClosedIcon from '../../assets/eye-closed.png'; 

const Register = () => {
  const [showPassword, setShowPassword] = useState(false); // Estado para controlar a visibilidade da senha

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword); 
  };

  return (
    <main>
      <div>
        <Header />
      </div>
      <div className="register-container">
        <div className="register-card">
          <p>Nome e Sobrenome*</p>
          <input className="email" placeholder="Digite seu nome e sobrenome" />

          <p>E-mail*</p>
          <input className="email" placeholder="Digite seu e-mail" />

          <p>Confirme seu e-mail*</p>
          <input className="email" placeholder="Digite seu e-mail novamente" />

          <p>Senha*</p>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"} // Se showPassword for true, mostra a senha, caso contrário, oculta
              className="password"
              placeholder="Digite sua senha"
            />
            <img
              src={showPassword ? EyeOpenIcon : EyeClosedIcon} // Alterna o ícone com base no estado
              alt="Mostrar Senha"
              className="eye-icon-register"
              onClick={togglePasswordVisibility} // Alterna a visibilidade ao clicar no ícone
            />
          </div>

          <p>Sobre mim*</p>
          <textarea className="about-me" placeholder="Digite algo sobre você"></textarea>

          <div>
            <div className="upload-photo">
              <label htmlFor="upload-input" className="upload-label">Anexe uma foto para o seu perfil*</label>
              <input type="file" id="upload-input" className="upload-input" />
            </div>
          </div>

          <h3>Perfil de Idiomas</h3>
          <p>Idiomas que fala e nível*</p>
          <div className="language-profile">
            <select className="level-select">
              <option value="">Nível</option>
              <option value="basico">Básico</option>
              <option value="intermediario">Intermediário</option>
              <option value="avancado">Avançado</option>
              <option value="fluente">Fluente</option>
            </select>
            <select className="language-select">
              <option value="">Idioma</option>
              <option value="portugues">Português</option>
              <option value="ingles">Inglês</option>
              <option value="espanhol">Espanhol</option>
              <option value="frances">Francês</option>
              <option value="italiano">Italiano</option>
            </select>
          </div>

          <button>
            <img src={Seta} alt="Seta" />
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
};
  
  export default Register; 