

export default function Projectpin(prop){
  console.log(prop)

  return (
    
    <div className="container">

      <img alt="site-img" className="project_logo_image"  src={prop.img}/>

      <div className="not-img-container">

        <h3  className="project_website">{prop.website}</h3>
        <p className="project_description">{prop.description}</p>

      </div>
    </div>
  );
}
