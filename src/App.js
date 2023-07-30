import './App.css';
import projects from "./projects.json"
import social from "./social.json"
import Projectpin from './components/Projectpin';
import Socialpin from './components/Socialpin';
import profileImg from './components/images/profile.webp';

export default function App(){
    const ProjectpinArray = projects.map((item) => {
      return(
          <Projectpin 
            img = {item.project_logo_image}
            website = {item.project_website}
            description = {item.project_description}
          />
      )
    })
    const SocialpinArray = social.map((item) => {
      return(
          <Socialpin
            img = {item.social_logo_image}
            website = {item.social_website}
            email = {item.social_email}
          />
      )
    })
    
    return(
        <div>
          <section className='section-1'>
            
            <div className='profileImg-container'>
              <img alt="profile-img" className='profile-img' src={profileImg}/>

            </div>
            <h1 className='Top-text'>{`<h1>`}:wave: I'm {`{name}`}, an award-winning  multidisciplinary designer based in {`{location}`}, with a focus on {`{ability}`} and a love of {`{creative quirk}`}{`</h1>`}</h1>

            <h3 className='project-heading'>Projects:</h3> 
            {ProjectpinArray}

            <h3 className='social-media-heading'>Socials Media:</h3>
            {SocialpinArray}

            <h3 className='bio-heading'>Bio:</h3>
            <p className='bio'>
              I’m Orman, a product designer and digital artist in London. As a believer in the power of good design, I’m a keen explorer and diligent student of the creative world — from print, art, and interfaces to photography, architecture, and interiors.<br></br><br></br><br></br>I spent my 30's on an entrepreneurial expedition, combining marketing experience and passion for design, together with an insatiable desire to create. I’ve designed, built, grown, bought, and sold several design-led companies that have generated millions in revenue and gained millions of supporters.<br></br><br></br><br></br>

              Today, I’m the co-founder of Lemon Squeezy —<br></br>
              a close-knit collective committed to empowering creative people on the road to financial freedom through tools, services, and technology.<br></br><br></br>
              Here’s to those making it on their own terms.
            </p>

          </section>
        </div>
    )
}
