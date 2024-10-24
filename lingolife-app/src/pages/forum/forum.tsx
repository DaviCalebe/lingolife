import './forum.scss'
import Navbar from '../../components/navbar/navbar'
import ForumCard from '../../components/forum-card/forum-card'
import usa_flag from '../../assets/usa-flag.png'
import { useState } from 'react'
import ForumCrudModal from '../../components/forum-crud-modal/forum-crud-modal';

const Forum = () => {

    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <main>
            <Navbar
            title='Espaço de Compartilhamento'
            description='Aqui você pode acessar materiais publicados por outros usuários ou publicar os seus'/>

            <div className="posts">
                <button className='create-post-button' onClick={openModal}>Criar publicação</button>

                <ForumCrudModal isOpen={isModalOpen} onClose={closeModal} />
                
                <ForumCard 
                    name="João Silva"
                    buttonText="Visitar o perfil"
                    language={usa_flag}
                    title="Dicas de programação em React"
                    content="Aprenda a criar componentes reutilizáveis e a gerenciar o estado de forma eficiente."
                />
                <ForumCard 
                    name="Maria Oliveira"
                    buttonText="Visitar o perfil"
                    language="Inglês"
                    title="Introduction to TypeScript"
                    content="TypeScript is a superset of JavaScript that adds static typing to the code."
                />
                <ForumCard 
                    name="Carlos Pereira"
                    buttonText="Visitar o perfil"
                    language="Português"
                    title="Melhores práticas em desenvolvimento web"
                    content="Explore as melhores práticas para criar aplicações web escaláveis e de fácil manutenção."
                />
                <ForumCard 
                    name="Ana Costa"
                    buttonText="Visitar o perfil"
                    language="Espanhol"
                    title="Entendiendo el JSX"
                    content="JSX es una extensión de sintaxis para JavaScript que permite escribir HTML dentro del JavaScript."
                />
                <ForumCard 
                    name="Lucas Almeida"
                    buttonText="Visitar o perfil"
                    language="Português"
                    title="Gerenciamento de estado com Redux"
                    content="Aprenda como usar o Redux para gerenciar o estado da sua aplicação React."
                />
                <ForumCard 
                    name="Fernanda Santos"
                    buttonText="Visitar o perfil"
                    language="Inglês"
                    title="Styling Components with SASS"
                    content="Discover how to use SASS to style your components efficiently."
                />

            </div>
        </main>
    )
}

export default Forum