import './home.scss'
import Navbar from '../components/navbar/navbar.tsx';
import Footer from '../components/footer/footer.tsx';
import paper from '../assets/paper.png'
import woman from '../assets/woman.png'
import woman_notebook from '../assets/woman-notebook.png';
import usa_flag from '../assets/usa-flag.png';
import smart_matching from '../assets/smart-matching.png';
import forum_space from '../assets/forum-space.png';
 
function Home() {

  return (
    <main>
      <section className="banner">
        <Navbar/>
      </section>

      <section className='languages'>
        <h1>Escolha seu idioma de interesse</h1>
        <div className="flags">
          <img src={usa_flag} alt="usa-flag" />
          <img src={usa_flag} alt="usa-flag" />
          <img src={usa_flag} alt="usa-flag" />
          <img src={usa_flag} alt="usa-flag" />
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
          <div className="grid-centralize">
            <img src={smart_matching} alt="smart-matching" />
            <button className='img-button'>Correspondência <br /> Inteligente</button>
          </div>
          <p>Encontre aqui parceiros de estudo com habilidades complementares</p>
        </div>
        <div className="forum-space">
          <div className='grid-centralize'>
            <img src={forum_space} alt="" />
            <button className='img-button'>Espaço de <br /> Compartilhamento</button>
          </div>
          <p>Troque materiais didáticos e dicas valiosas</p>
        </div>
      </section>

      <section className="filter-and-scheduling">
        <div className="filters">
          <div className="container">
            <h1>Quais são os seus objetivos?</h1>
            <p>Escolha e acesse conteúdos específicos</p>
            <button>Trabalho</button>
            <button>Viagem</button>
            <button>Diversão</button>
          </div>
        </div>
        <div className="scheduling">
          <div className="container">
            <h1>Seus Agendamentos</h1>
          </div>
        </div>
      </section>

      <Footer />

    </main>
  )
}

export default Home