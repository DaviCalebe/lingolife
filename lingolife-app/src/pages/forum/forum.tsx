import './forum.scss'
import Navbar from '../../components/navbar/navbar'
import ForumCard from '../../components/forum-card/forum-card'
import { useState, useEffect } from 'react'
import ForumCrudModal from '../../components/forum-crud-modal/forum-crud-modal';
import { fetchPublications } from '../../services/publications-service'
import { IPublication } from '../../shared/interfaces';

const Forum = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [publications, setPublications] = useState<IPublication[]>([]);
    const [error, setError] = useState<string | null>(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const loadPublications = async () => {
            try {
                const data = await fetchPublications();
                setPublications(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Erro desconhecido');
            }
        };

        loadPublications();
    }, []);

    const sortedPublications = publications.sort((a, b) => {
        return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
    });

    return (
        <main>
            <Navbar
            title='Espaço de Compartilhamento'
            description='Aqui você pode acessar materiais publicados por outros usuários ou publicar os seus'/>

            <div className="posts">
                <button className='create-post-button' onClick={openModal}>Criar publicação</button>

                <ForumCrudModal isOpen={isModalOpen} onClose={closeModal} />
                
                {error ? (
                    <p>{error}</p>
                ) : (
                    sortedPublications.map((pub) => (
                        <ForumCard
                            key={pub._id}
                            _id={pub._id}
                            name="teste"
                            buttonText="Visitar o perfil"
                            title={pub.title}
                            content={pub.content}
                            fileSrc={pub.fileSrc}
                            language='portuguese'
                            createdAt={pub.createdAt}
                            updatedAt={pub.updatedAt}
                        />
                        ))
                )}

            </div>
        </main>
    )
}

export default Forum