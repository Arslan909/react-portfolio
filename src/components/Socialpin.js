

export default function Socialpin(prop){
    console.log(prop)
  
    return (
      
      <div className="container-2">

        <div className="image-container">
          <img alt="site-img" className="social_logo_image"  src={prop.img}/>
        </div>

        <div className="not-img-container-2">
  
          <h3 className="social_website">{prop.website}</h3>
          <p className="social_email">{prop.email}</p>
  
        </div>
      </div>
    );
  }
  