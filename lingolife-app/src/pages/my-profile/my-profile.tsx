import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Footer from "../../components/footer/footer";
import "./my-profile.scss";
import books from "../../assets/books.png";
import rectangle_left from "../../assets/Rectangle-left.png";
import { MdStarBorder } from "react-icons/md";
import Navbar from "../../components/navbar/navbar"; // Importando a Navbar
import { Link } from "react-router-dom"; // Certifique-se de importar o Link

export function MyProfile() {
  const { id } = useParams(); // Obtém o ID da URL
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://lingolifeapi.onrender.com/users/${id}`);
        if (!response.ok) {
          throw new Error("Erro ao buscar os dados do usuário.");
        }
        const data = await response.json();
        setUser(data.user); // Atualiza o estado com os dados do usuário
      } catch (error: any) {
        console.error(error.message);
      }
    };

    if (id) {
      fetchUser();
    }
  }, [id]);

  return (
    <>
      
      <Navbar />
      <main className="main-container">
      
        {user ? (
          <>
            <section className="info-profile">
              <section>
                <img
                  className="img-profile"
                  src={
                    user.profile_image ||
                    "https://cdn-icons-png.flaticon.com/512/4792/4792929.png"
                  }
                  alt={`${user.name}'s avatar`} // Melhorando a descrição da imagem
                />
              </section>


              <section>
                <p>OI, ME CHAMO</p>
                <h1>{user.name}</h1>
                <p>Eu falo:</p>
                <p>
                  <b>{user.language.idioma}</b> {user.language.level}
                </p>
                <p>{user.language.idioma}</p>
                <span>
                  <MdStarBorder /> 4,5
                </span>
                <p>
                  <b>Email:</b> {user.email}
                </p>
              </section>
            </section>

            <section className="about-profile">
              <h2 className="about-my">
                <b>Sobre mim :</b>
              </h2>
              <p>{user.about}</p>
            </section>

            <section className="material-container">
              <h2>Material Publicado</h2>
              <section className="material-complements">
                <Link to="/forum" className="no-underline">
                  <button className="complements-button">
                    <img src={books} alt="Material 1" />
                  </button>
                </Link>
                <Link to="/forum" className="no-underline">
                  <button className="complements-button">
                    <img src={books} alt="Material 2" />
                  </button>
                </Link>
                <Link to="/forum" className="no-underline">
                  <button className="complements-button">
                    <img src={books} alt="Material 3" />
                  </button>
                </Link>
              </section>
            </section>
          </>
        ) : (
          <p>Carregando perfil...</p>
        )}

        <div className="div-button">
          <button className="button-mensagem">Enviar mensagem</button>
        </div>

        <Footer />
      </main>
    </>
  );
}
