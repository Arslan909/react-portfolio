

export default function Projectpin(prop){
  console.log(prop)

  return (
    
    <div className="container">

      <img alt="site-img" className="project_logo_image"  src={prop.img}/>

      <div className="not-img-container">

        <a href ={prop.website} className="project_website">{prop.website}</a>
        <p className="project_description">{prop.description}</p>

      </div>
    </div>
  );
}
