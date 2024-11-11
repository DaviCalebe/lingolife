import "./profiles.scss"
import Footer from "../../components/footer/footer";


export function Profiles(){
    return(
        <body>
          <main className="main-container-2">

            <section className="perfil-container" >

            <section className="section-perfil">

            <div>
            <img 
            className="profile-img-2" src="https://cdn-icons-png.flaticon.com/512/4792/4792929.png"
             alt="" />
            </div>

            <div>
                <h1> <b>Jóse Lucas </b> </h1>
                <span> 4,5 </span> 
            </div>

            </section>


            <section>

                <div>
                <h2> <b> Sobre Mim </b> </h2>
                </div>

                <div>
                <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
                     tenetur doloribus voluptates natus vel nam aliquam ea, rem aspernatur 
                     voluptatem architecto culpa iure, laboriosam eveniet adipisci ex recusandae maiores cum.</p>
                </div>

                <button> Visitar Perfil </button>
                
            </section>

            </section>


            
        </main>  
        <Footer />
        </body>
    )

    
    
}