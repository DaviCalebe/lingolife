import './forum-crud-modal.scss'
import { useState } from 'react';
import { createPublications } from '../../services/publications-service';
import { ICreatePublication } from '../../shared/interfaces';

interface ModalProps{
    isOpen: boolean;
    onClose: () => void;
}

const ForumCrudModal = ({ isOpen, onClose }: ModalProps) => {
    const [title, setTitle] = useState('');
    const [language, setLanguage] = useState('');
    const [content, setContent] = useState('');
    const [fileSrc, setFileSrc] = useState<File | null>(null);

    const handleSubmit = async () => {
        const postData: ICreatePublication = { title, language, content, fileSrc}
        try{
            await createPublications(postData);
            console.log('Postagem criada com sucesso!')
            onClose();
        } catch (error) {
            console.error('Erro criando a postagem:', error);
        }
    }

    return (
        <>
            {isOpen && (
                <div className="forum-crud-modal">
                    <div className="overlay" onClick={onClose}>
                        <div className="container" onClick={(e) => e.stopPropagation()}>
                            <h2 id='create-post-title' >CRIAR POSTAGEM</h2>
                        
                            <div className="inputs">
                                <div className="header-inputs">

                                    <div className="input-title">

                                        <input type="text"
                                        placeholder='Título'
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)} />
                                    </div>

                                    <div className="input-language">

                                        <select name="languages"
                                        id="language"
                                        value={language}
                                        onChange={(e) => setLanguage(e.target.value)}>
                                            <option value="">Selecione uma linguagem</option>
                                            <option value="portuguese">Português</option>
                                            <option value="english">Inglês</option>
                                        </select>

                                    </div>
                                </div>

                                <div className="input-content">

                                    <input type="text"
                                    className=''
                                    placeholder='No que você está pensando?'
                                    value={content} onChange={(e) => setContent(e.target.value)} />

                                </div>


                                <input type="file"
                                id='file-input'
                                onChange={(e) => {
                                    if (e.target.files) {
                                        setFileSrc(e.target.files[0])
                                    }
                                }}/>
                            </div>


                            <div className="action-buttons">
                                <button id='cancel-button' onClick={onClose}>CANCELAR</button>
                                <button onClick={handleSubmit}>PUBLICAR</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ForumCrudModal