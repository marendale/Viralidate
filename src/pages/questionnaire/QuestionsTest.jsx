import React, { useState, useEffect } from "react";
import { getFunctions, httpsCallable } from "firebase/functions";
import { useNavigate } from 'react-router-dom';


const QuestionsTest = () => {
    const navigate = useNavigate();
    const [age, setAge] = useState('');
    const [sex, setSex] = useState('');
    const [showSuccess, setShowSuccess] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [model, setModel] = useState(null);

    useEffect(() => {
        if (model) {
          navigate('/questionnaire' , { state: { model: model } });
        }
    }, [model])

    const handleModelBuild = async (event) => {
        event.preventDefault();

        setLoading(true);
        const buildModel = httpsCallable(getFunctions(), "model_test")
        try {
            const data = {
                age,
                sex
            }
            const response = await buildModel(data)
            if (response.data) {
                setShowSuccess(true);
                setTimeout(() => {
                    setAge('');
                    setSex('');
                    setError(null);
                    setShowSuccess(false);
                }, 1000);
                setModel(response.data)
                setLoading(false)
            } 
        } catch (error) {
            setError(error.message);
            setLoading(false);
        }
    }

    return (
        <>
        <div>
            <form onSubmit={handleModelBuild}>
                <div>
                    <h2>Welcome to Viralidate ML</h2>
                    <h3>Please Input Information</h3>
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                {showSuccess && <div className="success-message">Model build successful. Redirecting...</div>}
                <div>
                    <label htmlFor="age">Age:</label>
                    <select id="age" name="age" onChange={(e) => setAge(e.target.value)}>
                        <option value="Under 15 years">Under 15 years</option>
                        <option value="15-24 years">15-24 years</option>
                        <option value="25-44 years">25-44 years</option>
                        <option value="45-64 years">45-64 years</option>
                        <option value="65-74 years">65-74 years</option>
                        <option value="75 years and over">75 years and over</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="sex">Sex</label>
                    <select id="sex" name="sex" onChange={(e) => setSex(e.target.value)}>
                        <option value="Female">Female</option>
                        <option value="Male">Male</option>
                    </select>
                </div>
                <button type="submit" disabled={loading}>Build Model</button>
                {loading && <div className="spinner"></div>}
            </form>
        </div>
        </>
    )
}

export default QuestionsTest