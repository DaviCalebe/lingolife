import './matching.scss';
import Navbar from '../../components/navbar/navbar';
import ProfileCard from '../../components/profile-card/profile-card';
import Footer from '../../components/footer/footer';
import { useState, useEffect } from 'react';

interface User {
  _id: string;
  name: string;
  language: {
    idioma: string;
    level: string;
  };
  about: string;
}

const Matching = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [errorMessage, setErrorMessage] = useState<string>('');

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://lingolifeapi.onrender.com/users/');
        if (!response.ok) {
          throw new Error('Erro ao buscar os usuários.');
        }
        const data = await response.json();
        setUsers(data); // Atualiza o estado com os usuários recebidos
      } catch (error: any) {
        setErrorMessage(error.message);
      }
    };

    fetchUsers();
  }, []);

  return (
    <main>
      <Navbar
        title="Correspondência Inteligente"
        description="Aqui você pode encontrar pessoas com objetivos semelhantes aos seus"
      />

      <div className="cards">
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {users.length > 0 ? (
          users.map((user) => (
            <ProfileCard
              key={user._id}
              userId={user._id} // Passa o ID do usuário
              name={user.name}
              profile_image="https://cdn-icons-png.flaticon.com/512/4792/4792929.png" // Imagem padrão
              language={user.language.idioma}
              language_level={user.language.level}
              about={user.about || 'Descrição não fornecida.'}
            />
          ))
        ) : (
          <p className="loading-message">Carregando correspondências...</p>
        )}
      </div>

      <Footer />
    </main>
  );
};

export default Matching;
