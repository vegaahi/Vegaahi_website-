import React from 'react';

const internshipOffers = [
  { title: 'Web Development Intern', company: 'Tech Solutions', location: 'Remote', duration: '3 months' },
  { title: 'Marketing Intern', company: 'Creative Agency', location: 'New York, NY', duration: '6 months' },
  { title: 'Graphic Design Intern', company: 'Design Hub', location: 'San Francisco, CA', duration: '3 months' },
  { title: 'Data Analyst Intern', company: 'Data Insights', location: 'Los Angeles, CA', duration: '4 months' },
];

const Internship = () => {
  return (
    <div className="container py-5">
      {/* <h2 className="text-center mb-4">Internship Opportunities</h2>
      <div className="row">
        {internshipOffers.map((internship, index) => (
          <div className="col-md-6 col-lg-4 mb-4" key={index}>
            <div className="p-4 border rounded shadow-sm">
              <h5>{internship.title}</h5>
              <p><strong>Company:</strong> {internship.company}</p>
              <p><strong>Location:</strong> {internship.location}</p>
              <p><strong>Duration:</strong> {internship.duration}</p>
              <button className="btn btn-primary">Apply Now</button>
            </div>
          </div>
        ))}
      </div> */}
       No internships currently..! wait for updates
    </div>
  );
};

export default Internship;
