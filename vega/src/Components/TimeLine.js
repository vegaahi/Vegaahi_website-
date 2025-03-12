import React from 'react';
import '../css/Timeline.css';  // Import your CSS file here

const Timeline = () => {
    return (
        <div className="container mt-5" id='timeline'>
            <div className="row text-center justify-content-center mb-5">
                <div className="col-xl-6 col-lg-8">
                    <h2 className="font-weight-bold">  Our Evolution</h2>
                    <p className="text-muted">We’re very proud of the path we’ve taken. Explore the history that made us the company we are today.</p>
                </div>
            </div>

            <div className="row">
                <div className="col">
                    <div className="timeline-steps aos-init aos-animate" data-aos="fade-up">
                        {[
                            { year: '2015', title: ' Acadamic level  training as Vega Technology', description: " " },
                            { year: '2017', title: ' Acadamic level  training & projects', description: "" },
                            { year: '2020', title: ' Industry level  trainings', description: "" },
                            { year: '2022', title: 'Real time application development', description: "" },
                            { year: '2024', title: 'Now as  Vegaahi IT PVT.LTD', description: "" },
                        ].map((item, index) => (
                            <div className="timeline-step" key={index}>
                                <div className="timeline-content" 
                                     data-toggle="popover" 
                                     data-trigger="hover" 
                                     data-placement="top" 
                                     title={item.year} 
                                     data-content={item.description}>
                                    <div className="inner-circle"></div>
                                    <p className="h6 mt-3 mb-1">{item.year}</p>
                                    <p className="h6 text-muted mb-0 mb-lg-0">{item.title}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
