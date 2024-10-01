import './navbar.scss'
import logo from '../../assets/lingolife-logo-original.png'


export default function Navbar(){
    return (
        <>
            <nav>
                <div className="logo">
                    <div className="void-box">
                        <div className="white-box">
                            <img src={logo} alt="logo" />
                        </div>
                    </div>
                </div>

                <div className="nav-buttons">
                    <button>Entrar</button>
                    <button>Registrar</button>
                </div>
            </nav>
        </>
    )
}