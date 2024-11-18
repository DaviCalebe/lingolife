import './ranking.scss';
import Header from '../../components/header/header.tsx'
import Footer from '../../components/footer/footer.tsx'
import MedalhaOuro from '../../assets/medalha-de-ouro.png'; 
import MedalhaPrata from '../../assets/medalha-de-prata.png'; 
import MedalhaBronze from '../../assets/medalha-de-bronze.png'; 
import Profile_Pic from '../../assets/profile-pic.png'; 
import FirstMen from '../../assets/homem1.png'; 
import SecondMen from '../../assets/homem2.png'; 
import Trofeu from '../../assets/trofeu.png'; 
import Friends from '../../assets/friends.png'; 

const Ranking = () => {
  return (
    <main>
      <Header />

      <div className='trofeu-container'>
        <img className='trofeu' src={Trofeu} alt="Trofeu" />
        <p>Ranking</p>
      </div>

      <div className="podium">
        {/* Segunda posição */}
        <div className="position second">
          <div className="profile-container">
            <div className="profile-box">
              <img src={FirstMen} alt="User Profile" className="profile-img" />
            </div>
          </div>
          <img className='medalhas' src={MedalhaPrata} alt="Second place user" />
        </div>

        {/* Primeira posição */}
        <div className="position first">
          <div className="profile-container">
            <div className="profile-box">
              <img src={Profile_Pic} alt="User Profile" className="profile-img" />
            </div>
          </div>
          <img className='medalhas' src={MedalhaOuro} alt="First place user" />
        </div>

        {/* Terceira posição */}
        <div className="position third">
          <div className="profile-container">
            <div className="profile-box">
              <img src={SecondMen} alt="User Profile" className="profile-img" />
            </div>
          </div>
          <img className='medalhas' src={MedalhaBronze} alt="Third place user" />
        </div>
      </div>
      
      <div className="full-width-footer">
        <div className='conections'>
          <img src={Profile_Pic} alt="User Profile" className="connection-profile-img" />
          <img src={Friends} alt="Users" className="users" />
          <span>Você e 20+ usuários</span>
        </div>
      </div>

      <Footer />
    </main>
  );
};
    
export default Ranking; 