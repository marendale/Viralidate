import React from 'react';
import './PatientProfile.css'; 
import patientImage from '../../../public/assets/patient_image.jpg';


const PatientProfile = () => {
    const patientData = {
        firstName: "John",
        lastName: "Smith",
        dateOfBirth: "03/13/1998",
        age: "22y 4m",
        weight: "168 lb",
        height: "5' 9\"",
        email: "johndoe@example.com",
        mobilePhone: "917-543-1234",
        homePhone: "212-123-1234",
        address: "1234 Main St, Anytown, AT 12345",
        medicalHistory: "Allergy: Aspirin"
    };

    return (
        <div className="patient-profile-container">
            <div className="patient-image">
                <img src={patientImage} alt="Patient" />
            </div>
            <div className="patient-details">
                <h2>{patientData.firstName} {patientData.lastName}</h2>
                <p className="medical-history">{patientData.medicalHistory}</p>
                <div className="personal-details">
                    <p><strong>DOB:</strong> {patientData.dateOfBirth}</p>
                    <p><strong>Age:</strong> {patientData.age}</p>
                    <p><strong>Weight:</strong> {patientData.weight}</p>
                    <p><strong>Height:</strong> {patientData.height}</p>
                    <p><strong>Email:</strong> {patientData.email}</p>
                    <p><strong>Mobile Phone:</strong> {patientData.mobilePhone}</p>
                    <p><strong>Home Phone:</strong> {patientData.homePhone}</p>
                    <p><strong>Address:</strong> {patientData.address}</p>
                </div>
            </div>
        </div>
    );
};

export default PatientProfile;
