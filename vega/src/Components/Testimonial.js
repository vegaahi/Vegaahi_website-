import React from "react";
import "../css/Testimonial.css";
import BITS from "../Assests/BITS.jpg";

import KITS from "../Assests/KITS.jpg"; // Add more images for clients
import KITSS from "../Assests/KITSS.jpg"; // Add more images for clients
import MRCES from "../Assests/MRCEW.jpg"; // Add more images for clients
import MRITS from "../Assests/MRITS.jpg"; // Add more images for clients
import PRIYADASHSINI from "../Assests/PRIYADARHSINI.jpg"; // Add more images for clients
import REC from "../Assests/REC.jpg"; // Add more images for clients
import RIT from "../Assests/RIT.jpg"; // Add more images for clients
import SBIT from "../Assests/SBIT.jpg"; // Add more images for clients
import SVIST from "../Assests/SVIST.jpg"; // Add more images for clients
import SR from "../Assests/SR.jpg"; // Add more images for clients
import VEC from "../Assests/VEC.jpg"; // Add more images for clients
import VAGGDEVI from "../Assests/VAGGDEVI.jpg"; // Add more images for clients
import JAYAMUKHI from "../Assests/JAYAMUKHI.jpg"; // Add more images for clients

function Testimonial() {
  const clients = [
    { id: 1, name: "BITS", image: BITS },
    { id: 2, name: "VEC ", image: VEC },
    { id: 3, name: "JAYAMUKHI", image: JAYAMUKHI },
    { id: 4, name: "KITS", image: KITS },
    { id: 5, name: "KITSS", image: KITSS },
    { id: 6, name: "MRCES", image: MRCES },
    { id: 7, name: "MRITS", image: MRITS },
    { id: 8, name: "PRIYADARSHINI", image: PRIYADASHSINI },
    { id: 9, name: "REC ", image: REC },
    { id: 10, name: "RIT", image: RIT },
    { id: 11, name: "SBIT ", image: SBIT },
    { id: 12, name: "SR", image: SR },
    { id: 13, name: "SVIST", image: SVIST },
    { id: 14, name: "VAGGDEVI", image: VAGGDEVI },
   
 
  ];

  return (
    <div className="testimonial-container m-3">
      <h2 className=" font-weight-bold ">Our Educational Clients</h2>
      <div className="testimonial p-3">
        {clients.map((client) => (
          <div key={client.id} className="testimonial-content">
            <img
              src={client.image}
              alt={client.name}
              className="testimonial-image"
            />
            <span className="testimonial-name">{client.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonial;
