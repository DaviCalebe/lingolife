import './navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/lingolife-logo-original.png'


export default function Navbar(){
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