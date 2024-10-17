import './profile-card.scss'

interface IProfileCard {
  name: string,
  image?: string,
  language: string,
  about?: string,
  buttonText?: string
}

const ProfileCard = ({
  name = '',
  image = '',
  language = '',
  about = '',
  buttonText = 'VISITAR O PERFIL'
}: IProfileCard) => {
  return (
    <div className="profile-card">
      <div className="user-header">
        <div className="grid-centralize">
            {image ? (
                <img src={image} alt="profile-pic" />
            ) : (
                <div className="over-box">
                    <p className='no-image'>Sem imagem</p>
                </div>
                
                
            )}
          <div className="under-box"></div>
        </div>
        <div className="user-info">
          <h1>{name}</h1>
          <h2>{language}</h2>
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