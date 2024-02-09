import React from 'react';


const DetailsCard = (props) => {
  return (
    <div className="card m-3" s>
      <div  className='row'>
        <div className='col-4'>
            <img src={`https://image.tmdb.org/t/p/w500${props.img}`} className="img-fluid rounded-start" alt="Movie Poster" />
      </div>  
      <div className="card-body col-8">
        <h1 className="card-title">{props.name}</h1>
    
        <p className="card-text"><h5>Overview :</h5> {props.overview}</p>
         <ul className="list-group list-group-flush">
        <li className="list-group-item"><h6>Relase Date :</h6> {props.date}&nbsp;&nbsp;</li>
        <li className="list-group-item">Rating : {props.average}  <i className="bi bi-star-half"></i></li>
        <li className="list-group-item">Numer Of Pepole Rating : {props.views}  <i className="bi bi-person-hearts"></i></li>
        
      </ul>
      </div>
     
      </div>
      
    </div>
  );
};

export default DetailsCard;
