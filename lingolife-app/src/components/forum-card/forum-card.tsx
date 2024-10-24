import './forum-card.scss';
import { IBaseCard } from '../shared/interfaces.tsx';
import { fetchPublications } from '../../services/publications-service.ts';
import { useEffect, useState } from 'react';

export interface IForumCard extends IBaseCard{
    title: string,
    content: string,
    fileSrc?: string,
    language: string
}

const ForumCard = ({
    profile_image='',
    name='',
    buttonText='Visitar o perfil',
}:IForumCard) => {

    const [publications, setPublications] = useState<IForumCard[]>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadPublications = async () => {
            try {
                const data = await fetchPublications();
                setPublications(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Erro desconhecido');
            }
        };

        loadPublications(); // Chama a função diretamente dentro do useEffect
    }, []);

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
            <h3>Publicado em data</h3>
            <div className="post-content">
                {error ? (
                    <p>{error}</p>
                ) : (
                    publications.map((pub, index) => (
                        <li key={index}>
                            <h1 className="title">{pub.title}</h1>
                            <p className="content">{pub.content}</p>
                        </li>
                    ))
                )}
            </div>
        </div>
    )
}

export default ForumCard