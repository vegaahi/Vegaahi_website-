import React from 'react';
import hiring from "../Assests/hiring.jpg";

const LatestNews = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Latest News</h2>

      {/* We Are Hiring Poster */}
      <div className="text-center mb-5">
        <img
          src={hiring}
          alt="We Are Hiring"
          className="img-fluid rounded"
          style={{ maxHeight: '400px', objectFit: 'cover' }} 
        />
      </div>
    </div>
  );
}

export default LatestNews;
