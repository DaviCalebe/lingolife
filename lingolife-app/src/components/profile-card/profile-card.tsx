import './profile-card.scss';
import { IBaseCard } from '../../shared/interfaces.tsx';
import { useNavigate } from 'react-router-dom'; // Para navegação entre páginas

interface IProfileCard extends IBaseCard {
  language_level: string;
  about?: string;
  userId: string; // Adicionando o ID do usuário para redirecionamento
}

const ProfileCard = ({
  name = '',
  profile_image = '',
  language = '',
  language_level = '',
  about = '',
  buttonText = 'VISITAR O PERFIL',
  userId
}: IProfileCard) => {
  const navigate = useNavigate(); // Hook de navegação

  // Função para lidar com o clique no botão
  const handleVisitProfile = () => {
    navigate(`/profile/${userId}`); // Navega para o perfil do usuário
  };

  return (
    <div className="profile-card">
      <div className="user-header">
        <div className="grid-centralize">
          {profile_image ? (
            <img className="profile-image" src={profile_image} alt="profile-pic" />
          ) : (
            <div className="no-image-container">
              <p className="no-image-text">Sem imagem</p>
            </div>
          )}
        </div>
        <div className="user-info">
          <h1>{name}</h1>
          <h4>{language} {language_level}</h4>
        </div>
      </div>
      {about ? (
        <div className="user-description">
          <p>{about}</p>
        </div>
      ) : (
        <p className="no-about">Sem descrição</p>
      )}
      <button className="dark-blue-button" onClick={handleVisitProfile}>
        {buttonText}
      </button>
    </div>
  );
};

export default ProfileCard;
