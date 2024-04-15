import React, { useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './Survey.css';
import { db } from "../../config/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import { useNavigate } from 'react-router-dom';

const Survey = () => {
    const navigate = useNavigate(); // Create navigate instance
    const [feedback, setFeedback] = useState({
        symptomCheckerExperience: '',
        appointmentSelectionExperience: '',
        overallExperience: ''
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFeedback(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            // Add a new document with a generated ID to the "feedback" collection
            await addDoc(collection(db, "feedback"), feedback);
            alert('Thank you for your feedback!');
            setFeedback({ symptomCheckerExperience: '', appointmentSelectionExperience: '', overallExperience: '' });
            navigate('/');
        } catch (e) {
            console.error("Error adding document: ", e);
            alert('Failed to send feedback. Please try again.');
        }
    };


    return (
        <div className='div'>
            <form onSubmit={handleSubmit}>
                <h2>Patient Feedback Survey</h2>
                <div className='div'>
                    <label htmlFor="symptomCheckerExperience">How was your experience with our Symptom Checker?</label>
                    <textarea
                        id="symptomCheckerExperience"
                        name="symptomCheckerExperience"
                        value={feedback.symptomCheckerExperience}
                        onChange={handleChange}
                        placeholder="Share your thoughts"
                    />
                </div>
                <div className='div'>
                    <label htmlFor="appointmentSelectionExperience">How was your experience selecting an appointment?</label>
                    <textarea
                        id="appointmentSelectionExperience"
                        name="appointmentSelectionExperience"
                        value={feedback.appointmentSelectionExperience}
                        onChange={handleChange}
                        placeholder="Share your thoughts"
                    />
                </div>
                <div className='div'>
                    <label htmlFor="overallExperience">Overall, how was your experience on our website?</label>
                    <textarea
                        id="overallExperience"
                        name="overallExperience"
                        value={feedback.overallExperience}
                        onChange={handleChange}
                        placeholder="Share your thoughts"
                    />
                </div>
                <button type="submit">Submit Feedback</button>
            </form>
        </div>
    );
};

export default Survey;