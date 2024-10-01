import './home.scss'
import Navbar from '../components/navbar/navbar.tsx';
import Footer from '../components/footer/footer.tsx';
import paper from '../assets/paper.png'
import woman from '../assets/woman.png';

function Home() {

  return (
    <main>
      <section className="banner">
        <Navbar/>
        <img src={paper} alt="paper" />
        <img src={woman} alt="woman" />
      </section>

      <Footer />
    </main>
  )
}

export default Home