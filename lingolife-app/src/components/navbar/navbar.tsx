import './navbar.scss'
import { Link, useLocation } from 'react-router-dom'
import logo from '../../assets/lingolife-original-logo.png'

const Navbar = (props: any) => {

    const location = useLocation();

    if (location.pathname  === '/forum' || location.pathname === '/matching'){
        return (
            <>
                <nav>
                    <div className="logo">
                        <Link to="/">
                            <div className="void-box">
                            </div>
                        </Link>
                        <div className="white-box">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
    
                    <div className="nav-buttons">
                        <Link to="login" className='no-underline'> <button>ENTRAR</button> </Link>
                        <Link to="login" className='no-underline'> <button>REGISTRAR</button> </Link>
                    </div>
                </nav>
                <div className="nav-title">
                    <h2>você está acessando o</h2>
                    <h1>{props.title}</h1>
                    <h3>{props.description}</h3>
                </div>
            </>
        )
    } else{
        return (
            <>
                <nav>
                    <div className="logo">
                        <Link to="/">
                            <div className="void-box">
                            </div>
                        </Link>
                        <div className="white-box">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
    
                    <div className="nav-buttons">
                        <Link to="login" className='no-underline'> <button>ENTRAR</button> </Link>
                        <Link to="login" className='no-underline'> <button>REGISTRAR</button> </Link>
                    </div>
                </nav>
            </>
        )
    }
}

export default Navbar