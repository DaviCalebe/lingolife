import Footer from "../../components/footer/footer";
import "./my-profile.scss"
import books from "../../assets/books.png"
import rectangle_left from "../../assets/Rectangle-left.png"
import { MdStarBorder } from "react-icons/md";


export function MyProfile() {
  return (

      
    <main className="main-container">
      <section className="info-profile">
        <section>
          <img className="img-profile"
            src="https://cdn-icons-png.flaticon.com/512/4792/4792929.png"
            alt="avatar"
          />
        </section>

        <div className="rectangle-left">
          <img src={rectangle_left} alt="" />
        </div>

        <section >
          <p> OI, ME CHAMO </p>
          <h1> Jóse Lucas </h1>
          <p> eu falo: </p>
          <p>
            
            <b>Inglês </b> Intermediário
          </p>
          <p>
            
            <b>Espanhol </b> Avançado
          </p>
          <p>Este usuario está no ranking de inglês </p>
          <span> <MdStarBorder /> 4,5 </span>
        </section>
      </section>

      <section className="about-profile">
        <h2 className="about-my">
          
          <b > Sobre mim </b>
        </h2>
        <p>
          
          Lorem ipsum dolor sit amet consecteturadipisicing elit. Quibusdam, itaque enim
           iusto accusantium nihil eaque reprehenderit impedit doloremque architecto, 
           officiis in illum illo officia? Alias qui dolorem repudiandae laborum dolorum.
        </p>
      </section>


      <section className="material-container">

      <h2> Material Publicado </h2>

      <section className= "material-complements" >

      <button className="complements-button"> 
      <img   src={books} alt="" />
      </button>

      <button className="complements-button">
      <img  src={books} alt="" />
      </button>

      <button className="complements-button">
      <img src={books} alt="" />
      </button>
      

      </section>

     </section>

     <Footer />
    </main>

    
  );
}
