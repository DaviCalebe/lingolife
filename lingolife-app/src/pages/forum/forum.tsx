import './forum.scss'
import Navbar from '../../components/navbar/navbar'
import ForumCard from '../../components/forum-card/forum-card'
import { useState, useEffect } from 'react'
import ForumCrudModal from '../../components/forum-crud-modal/forum-crud-modal';
import { fetchPublications } from '../../services/publications-service'
import { IForumCard } from '../../components/forum-card/forum-card'

const Forum = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [publications, setPublications] = useState<IForumCard[]>([]);
    const [error, setError] = useState<string | null>(null);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    useEffect(() => {
        const loadPublications = async () => {
            try {
                const data = await fetchPublications();
                console.log(data)
                setPublications(data);
            } catch (error) {
                setError(error instanceof Error ? error.message : 'Erro desconhecido');
            }
        };

        loadPublications(); // Call the function directly in useEffect
    }, []);

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
                    publications.map((pub) => (
                        <ForumCard
                            name="teste" // Assuming name is part of the publication data
                            buttonText="Visitar o perfil" // You might want to adjust this based on your data
                            title={pub.title}
                            content={pub.content}
                            fileSrc={pub.fileSrc}
                            language='portuguese'
                        />
                        ))
                )}

            </div>
        </main>
    )
}

export default Forum