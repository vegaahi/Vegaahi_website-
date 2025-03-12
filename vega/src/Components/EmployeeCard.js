import React from 'react';
import '../css/EmployeeCard.css'; 
import slide1 from '../Assests/slide1.jpeg';
const EmployeeCard = (props) => {
 
    const{image,title, name,description,about} =props;
  return (
    <div className="card-container">
      <div className="card">
        <div className="card-front">
          <img
            src={image} 
            alt="Employee"
            className="card-img"
          />
          <div className="card-body">
  <h3 className="card-title">{title}</h3>
  <h6 class="card-subtitle mb-2 ">{name}</h6>
  <p class="card-text">{description}</p>
  
  
</div>

        </div>
        <div className="card-back">
          <div className="card-body text-center">
            <h3 className="card-title" style={{color:'white'}}>{name}</h3>
            <p className="card-text" style={{color:'white'}}>
             {about}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeCard;
