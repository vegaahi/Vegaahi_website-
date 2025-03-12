import React from "react";

const Profile = () => {
    return (
        <div className="container mt-4">
            <div className="profile-container shadow-sm">
                <div className="profile-header bg-primary text-white text-center">
                    <h4>Employee Profile</h4>
                </div>
                <div className="profile-body">
                    <div className="row">
                        <div className="col-md-4 text-center">
                            <img
                                src="https://via.placeholder.com/150"
                                alt="Profile"
                                className="img-fluid rounded-circle border"
                            />
                        </div>
                        <div className="col-md-8">
                            <h5 className="profile-title">John Doe</h5>
                            <p className="profile-text">
                                <strong>Email:</strong> johndoe@example.com
                            </p>
                            <p className="profile-text">
                                <strong>Phone:</strong> +1 234 567 890
                            </p>
                            <p className="profile-text">
                                <strong>Position:</strong> Software Engineer
                            </p>
                            <p className="profile-text">
                                <strong>Address:</strong> 123 Main Street, City, Country
                            </p>
                            <button className="btn btn-primary">Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
