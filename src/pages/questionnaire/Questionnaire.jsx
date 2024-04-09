/* eslint-disable no-prototype-builtins */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';
import decisionTree from './decision_tree_model.json'; // Adjust the path as necessary
import symptomQuestions from './symptom_questions.json'; // Import the symptom questions
import diseaseUrgency from './disease_urgency.json';
import Navbar from '../../components/navbar/Navbar';
import './Questionnaire.css';

const Questionnaire = () => {
  const navigate = useNavigate();
  let location = useLocation();
  console.log(location.state.model)
  let model = location.state.model;
  const [currentNode, setCurrentNode] = useState(model);
  const [diagnosis, setDiagnosis] = useState('');
  const [urgency, setUrgency] = useState('High');

  useEffect(() => {
    // If currentNode has a disease property, we've reached a diagnosis
    if (currentNode.hasOwnProperty('disease')) {
      setDiagnosis(currentNode.disease); // Assuming diagnosis format needs adjustment
      //setUrgency(diseaseUrgency[currentNode.disease]);
    }
  }, [currentNode]);

  useEffect(() => {
    if (diagnosis && urgency) {
      navigate('/appointment-selection' , { state: { diagnosis: diagnosis, urgency: urgency } });
    }
  }, [diagnosis, urgency])

  const handleAnswer = (answer) => {
    const nextNode = answer ? currentNode.yes : currentNode.no;
    setCurrentNode(nextNode);
  };

  // Helper function to get the question for the current symptom

  return (
    <div className="question">
      <Navbar />
      <div className="question-container">
        <h2>Are you experiencing {currentNode.symptom}?</h2>
        <button id="sym-button" onClick={() => handleAnswer(true)}>Yes</button>
        <button id="sym-button" onClick={() => handleAnswer(false)}>No</button>
      </div>
    </div>
  );
};

export default Questionnaire;
