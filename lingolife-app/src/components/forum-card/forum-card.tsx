import './forum-card.scss';
import { IBaseCard } from '../shared/interfaces.tsx';

export interface IForumCard extends IBaseCard {
    title: string,
    content: string,
    fileSrc?: string,
    language: string
}

const ForumCard = ({
    profile_image = '',
    name = '',
    buttonText = 'Visitar o perfil',
    title,
    content,
    fileSrc,
    language,
}: IForumCard) => {
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
                {fileSrc ?? (
                    <img src={fileSrc} alt="pub-image" />
                )}
            </div>
        </div>
    );
}

export default ForumCard;