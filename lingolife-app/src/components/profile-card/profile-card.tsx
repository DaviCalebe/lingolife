import './profile-card.scss'

interface IProfileCard {
    name: string,
    image?: string,
    language: string,
    about?: string
}

const ProfileCard = ( {name='', image='', language='', about='' } :IProfileCard) => {
    return(
        <div className='profile-card'>
            <div className="user-header">
                <div className="grid-centralize">
                    <div className="under-box"></div>
                    <img src={image} alt="profile-pic" />
                </div>
                <div className="user-info">
                    <h1>{name}</h1>
                    <h2>{language}</h2>
                </div>
            </div>
            <div className="user-description">
                <p>{about}</p>
            </div>
            <button className='dark-blue-button'>VISITAR O PERFIL</button>
        </div>
    )
}

export default ProfileCard