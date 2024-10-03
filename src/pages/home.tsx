import './home.scss'
import Navbar from '../components/navbar/navbar.tsx';
import Footer from '../components/footer/footer.tsx';
import woman_notebook from '../assets/woman-notebook.png';
 
function Home() {

  return (
    <main>
      <section className="banner">
        <Navbar/>
      </section>

      <section className='languages'>
        <h1>Escolha seu idioma de interesse</h1>
        <div className="flags">

        </div>
      </section>

      <section className='description'>
        <div className="img-effect">
          <div className="void-box"></div>
          <div className="dark-blue-box"></div>
          <img src={woman_notebook} alt="woman-notebook" />
        </div>
        <div className="info">
          <h1>No LingoLife, você pode:</h1>
          <p>Criar seu perfil destacando suas habilidades e metas. <br/> <br/>Utilizar nosso sistema de correspondência inteligente para encontrar parceiros de estudo.<br/> <br/>Agendar sessões de estudo em horários convenientes.<br/> <br/> Compartilhar materiais e dicas na nossa comunidade.</p>
        </div>
      </section>


      <section className="home-shortcuts">
        <div className="smart-matching">

        </div>
        <div className="forum-space">

        </div>
      </section>

      <Footer />
    </main>
  )
}

export default Home