import './navbar.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/lingolife-logo-original.png'


export default function Navbar(){
    return (
        <>
            <nav>
                <Link to="/">
                    <div className="logo">
                        <div className="void-box">
                        </div>
                        <div className="white-box">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                </Link>

                <div className="nav-buttons">
                    <Link to="login"> <button>ENTRAR</button> </Link>
                    <Link to="login"> <button>REGISTRAR</button> </Link>
                </div>
            </nav>
        </>
    )
}