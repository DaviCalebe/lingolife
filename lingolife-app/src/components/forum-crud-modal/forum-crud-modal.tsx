import './forum-crud-modal.scss'

interface ModalProps{
    isOpen: boolean;
    onClose: () => void;
}

const ForumCrudModal = ({ isOpen, onClose }: ModalProps) => {
    return (
        <>
            {isOpen && (
                <div className="forum-crud-modal">
                    <div className="overlay" onClick={onClose}>
                        <div className="container" onClick={(e) => e.stopPropagation()}>
                            <h2>Forum CRUD Modal</h2>
                            <p>This is the modal content.</p>
                            <button onClick={onClose}>Close Modal</button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default ForumCrudModal