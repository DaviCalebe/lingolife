import './profile-card.scss'
import { IBaseCard } from '../shared/interfaces.tsx'

interface IProfileCard extends IBaseCard{
  language_level: string,
  about?: string,
}

const ProfileCard = ({
  name = '',
  profile_image = '',
  language = '',
  language_level = '',
  about = '',
  buttonText = 'VISITAR O PERFIL'
}: IProfileCard) => {
  return (
    <div className="profile-card">
      <div className="user-header">
        <div className="grid-centralize">
            {profile_image ? (
                <img src={profile_image} alt="profile-pic" />
            ) : (
                <div className="over-box">
                    <p className='no-image'>Sem imagem</p>
                </div>
            )}
            <div className="under-box"></div>
        </div>
        <div className="user-info">
          <h1>{name}</h1>
          <h2>{language} {language_level}</h2>
        </div>
      </div>
      {about ? (
        <div className="user-description">
          <p>{about}</p>
        </div>
      ) : (
        <p className="no-about">Sem descrição</p>
      )}
      <button className="dark-blue-button">{buttonText}</button>
    </div>
  )
}

export default ProfileCard