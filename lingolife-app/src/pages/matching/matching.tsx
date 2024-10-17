import './matching.scss'
import Navbar from '../../components/navbar/navbar'
import ProfileCard from '../../components/profile-card/profile-card.tsx'
import Footer from '../../components/footer/footer.tsx'
import Profile_Pic from '../../assets/profile-pic.png'

const Matching = () => {
    return (
        <main>
            <Navbar
            title='Correspondência Inteligente'
            description='Aqui você pode encontrar pessoas com objetivos semelhantes aos seus'/>
            
            <div className="cards">
                <ProfileCard name='Ana Beatriz' language='A1' ></ProfileCard>
                <ProfileCard name='Ana Beatriz' image={Profile_Pic} language='A1' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'></ProfileCard>
                <ProfileCard name='Ana Beatriz' image={Profile_Pic} language='A1' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'></ProfileCard>
                <ProfileCard name='Ana Beatriz' image={Profile_Pic} language='A1' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'></ProfileCard>
                <ProfileCard name='Ana Beatriz' image={Profile_Pic} language='A1' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'></ProfileCard>
                <ProfileCard name='Ana Beatriz' image={Profile_Pic} language='A1' about='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec sed odio dui. Duis mollis, est non commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem nec elit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.'></ProfileCard>
            </div>
            
            <Footer></Footer>
        </main>
    )
}

export default Matching