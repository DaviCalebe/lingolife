import './forum-card.scss';
import { IBaseCard } from '../shared/interfaces';

interface IForumCard extends IBaseCard{
    title: string,
    content: string,
    file?: string,
    date: string
}

const ForumCard = ({
    name='',
    profile_image='',
    buttonText='Visitar o perfil',
    date='',
    language='',
    title='',
    content='',
}:IForumCard) => {
    return(
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
            <h3>Publicado em {date}</h3>
            <div className="post-content">
                <h1 className="title">{title}</h1>
                <p className="content">{content}</p>
            </div>
        </div>
    )
}

export default ForumCard