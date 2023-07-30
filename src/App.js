import './App.css';
import projects from "./projects.json"
import Projectpin from './components/Projectpin';


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
    return(
        <div>
            <h3>Projects</h3>   
            {ProjectpinArray}
        </div>
    )
}
