import './header.scss'
import LogoLingoWhite from '../../assets/lingolife-white-logo.png'

const Header = () => {
    const handleGoBack = () => {
        window.location.href = '/'; // Função para voltar à página inicial
    };
  
    return (
      <header className="header">
        <img src={LogoLingoWhite} alt="Logo LingoLife White" className="logo" />
        <button onClick={handleGoBack} className="back-button">Voltar</button>
      </header>
    );
  };
  
  export default Header;
