import React from 'react';
import './AdminProfile.css'; 
import adminImage from '../../../public/assets/admin_image.jpg';


const AdminProfile = () => {
    const adminData = {
        firstName: "Jane",
        lastName: "Smith",
        dateOfBirth: "03/13/1998",
        age: "22y 4m",
        weight: "168 lb",
        height: "5' 9\"",
        email: "janesmith@example.com",
        mobilePhone: "917-543-1234",
        homePhone: "212-123-1234",
        address: "1234 Main St, Anytown, AT 12345",
    };

    return (
        <div className="admin-profile-container">
            <div className="admin-image">
                <img src={adminImage} alt="Admin" />
            </div>
            <div className="admin-details">
                <h2>{adminData.firstName} {adminData.lastName}</h2>
                <p className="medical-history">{adminData.medicalHistory}</p>
                <div className="personal-details">
                    <p><strong>DOB:</strong> {adminData.dateOfBirth}</p>
                    <p><strong>Age:</strong> {adminData.age}</p>
                    <p><strong>Weight:</strong> {adminData.weight}</p>
                    <p><strong>Height:</strong> {adminData.height}</p>
                    <p><strong>Email:</strong> {adminData.email}</p>
                    <p><strong>Mobile Phone:</strong> {adminData.mobilePhone}</p>
                    <p><strong>Home Phone:</strong> {adminData.homePhone}</p>
                    <p><strong>Address:</strong> {adminData.address}</p>
                </div>
            </div>
        </div>
    );
};

export default AdminProfile;
