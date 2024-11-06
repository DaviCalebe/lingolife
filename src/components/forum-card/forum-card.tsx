import './forum-card.scss';
import { IPublication } from '../../shared/interfaces.tsx';

const ForumCard = ({
    profile_image = '',
    name = '',
    buttonText = 'Visitar o perfil',
    title,
    content,
    fileSrc,
    language,
}: IPublication) => {

    const fileUrl = fileSrc instanceof File ? URL.createObjectURL(fileSrc) : fileSrc;
    
    return (
        <div className='forum-card'>
            <div className="header">
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
                <div className="user-link">
                    <h1>{name}</h1>
                    <h3>{buttonText}</h3>
                </div>
            </div>
            <h3>Publicado em data</h3>
            <div className="post-content">
                <h1 className="title">{title}</h1>
                <p className="content">{content}</p>
                {fileUrl && typeof fileUrl === 'string' && (
                    <img src={fileUrl} alt="pub-image" />
                )}
            </div>
        </div>
    );
}

export default ForumCard;