import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Importar o hook useNavigate
import "./register.scss";
import Header from "../../components/header/header.tsx";
import Footer from "../../components/footer/footer.tsx";
import Seta from "../../assets/seta-direita.png";
import EyeOpenIcon from "../../assets/eye.png";
import EyeClosedIcon from "../../assets/eye-closed.png";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    confirmEmail: "",
    password: "",
    confirmpassword: "",
    language: "",
    level: "",
    about: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const navigate = useNavigate(); // Criar a função de navegação

  // Alternar visibilidade da senha
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  // Lidar com mudanças nos inputs
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Lidar com envio do formulário
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    const { name, email, confirmEmail, password, confirmpassword, about, language, level } = formData;
  
    // Validações simples
    if (!name || !email || !password || !confirmpassword || !about || !language || !level) {
      setMessage('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    if (email !== confirmEmail) {
      setMessage('Os e-mails não correspondem.');
      return;
    }
    if (password !== confirmpassword) {
      setMessage('As senhas não correspondem.');
      return;
    }
  
    // Construir o objeto `language` conforme esperado pela API
    const payload = {
      name,
      email,
      password,
      confirmpassword,
      about,
      language: {
        level, // O nível do idioma
        idioma: language // O idioma selecionado
      }
    };
  
    try {
      const response = await fetch("https://lingolifeapi.onrender.com/users/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload), // Enviar o payload com o formato correto
      });
  
      const data = await response.json();
  
      if (!response.ok) {
        throw new Error(data.message || "Erro ao registrar usuário.");
      }
  
      alert("Usuário registrado com sucesso!");
      navigate("/"); // Voltar para a Home
    } catch (error: any) {
      setErrorMessage(error.message);
    }
  };

  return (
    <main>
      <div>
        <Header />
      </div>
      <div className="register-container">
        <div className="register-card">
          {message && <p className="message">{message}</p>}
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <p>Nome e Sobrenome*</p>
          <input
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="email"
            placeholder="Digite seu nome e sobrenome"
          />

          <p>E-mail*</p>
          <input
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="email"
            placeholder="Digite seu e-mail"
          />

          <p>Confirme seu e-mail*</p>
          <input
            name="confirmEmail"
            value={formData.confirmEmail}
            onChange={handleChange}
            className="email"
            placeholder="Digite seu e-mail novamente"
          />

          <p>Senha*</p>
          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="password"
              placeholder="Digite sua senha"
            />
            <img
              src={showPassword ? EyeOpenIcon : EyeClosedIcon}
              alt="Mostrar Senha"
              className="eye-icon-register"
              onClick={togglePasswordVisibility}
            />
          </div>

          <p>Confirmar Senha*</p>
          <input
            type={showPassword ? "text" : "password"}
            name="confirmpassword"
            value={formData.confirmpassword}
            onChange={handleChange}
            className="password"
            placeholder="Confirme sua senha"
          />

          <p>Sobre mim*</p>
          <textarea
            name="about"
            value={formData.about}
            onChange={handleChange}
            className="about-me"
            placeholder="Digite algo sobre você"
          ></textarea>

          <h3>Perfil de Idiomas</h3>
          <p>Idiomas que fala e nível*</p>
          <div className="language-profile">
            <select
              name="level"
              value={formData.level}
              onChange={handleChange}
              className="level-select"
            >
              <option value="">Nível</option>
              <option value="A1">A1</option>
              <option value="A2">A2</option>
              <option value="B1">B1</option>
              <option value="B2">B2</option>
              <option value="C1">C1</option>
              <option value="C2">C2</option>
            </select>
            <select
              name="language"
              value={formData.language}
              onChange={handleChange}
              className="language-select"
            >
              <option value="">Idioma</option>
              <option value="Português">Português</option>
              <option value="Inglês">Inglês</option>
              <option value="Espanhol">Espanhol</option>
              <option value="Francês">Francês</option>
              <option value="Italiano">Italiano</option>
            </select>
          </div>

          <form onSubmit={handleSubmit}>
            <button type="submit">
              <img src={Seta} alt="Seta" />
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </main>
  );
};

export default Register;
