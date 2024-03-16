import React from 'react'
import './Symptom.css'
import Navbar from '../../components/navbar/Navbar';

const Symptom = () => {
  return (
    <div>
        <Navbar />
        <div className="symptom"></div>
    </div>
  )
}

function adviseToSeekImmediateMedicalHelp() {
  alert("Based on your responses, it seems you have severe symptoms. Please seek medical attention immediately.");
}

function provideEmergencyContactInfo() {
  alert("Nearest Hospital: (Phone Number) & (Address)")
}

function displayGuidedQuestionnaire(question) {
  return confirm(question);
}

// Function to determine the severity of symptoms based on user responses
function enterSymptoms() {
  let symptoms = {
      fever: displayGuidedQuestionnaire("Do you have a fever?"),
      cough: displayGuidedQuestionnaire("Do you have a cough?"),
      soreThroat: displayGuidedQuestionnaire("Do you have a sore throat?"),
      shortnessOfBreath: displayGuidedQuestionnaire("Are you experiencing shortness of breath?"),
      bodyAches: displayGuidedQuestionnaire("Are you experiencing body aches?"),
      fatigue: displayGuidedQuestionnaire("Are you feeling unusually tired or fatigued?"),
      headache: displayGuidedQuestionnaire("Are you experiencing headaches?"),
      lossOfTasteOrSmell: displayGuidedQuestionnaire("Have you experienced a loss of taste or smell?"),
      nausea: displayGuidedQuestionnaire("Are you feeling nauseous?"),
      vomiting: displayGuidedQuestionnaire("Have you vomited recently?"),
      diarrhea: displayGuidedQuestionnaire("Are you experiencing diarrhea?"),
      chestPain: displayGuidedQuestionnaire("Are you experiencing chest pain?")
  };

  return categorizeSymptomsBasedOnSeverity(symptoms);
}

function categorizeSymptomsBasedOnSeverity(symptoms) {
  let severity = 0; // Default - 0
  if (symptoms.fever || symptoms.cough || symptoms.soreThroat || symptoms.shortnessOfBreath ||
    symptoms.bodyAches || symptoms.fatigue || symptoms.headache || symptoms.lossOfTasteOrSmell ||
    symptoms.nausea || symptoms.vomiting || symptoms.diarrhea || symptoms.chestPain) {
    if (symptoms.fever || symptoms.cough || symptoms.shortnessOfBreath || symptoms.lossOfTasteOrSmell || symptoms.chestPain) {
        severity = 3; // Severe symptoms - 3
    } else if (symptoms.bodyAches || symptoms.fatigue || symptoms.headache || symptoms.nausea || symptoms.vomiting || symptoms.diarrhea) {
        severity = 2; // Moderate symptoms - 2
    } else {
        severity = 1; // Mild symptoms - 1
    }
  }

  return severity;
}

function provideRecommendations(severity) {
  switch (severity) {
      case 0:
          alert("Based on your responses, it seems you have no significant symptoms.");
          break;
      case 1:
          alert("Based on your responses, it seems you have mild symptoms.");
          break;
      case 2:
          alert("Based on your responses, it seems you have moderate symptoms.");
          break;
      case 3:
          adviseToSeekImmediateMedicalHelp();
          provideEmergencyContactInfo();
          break;
      default:
          alert("Invalid severity level.");
  }
}

// Main function to run the program
function main() {
  alert("Welcome to the Health Symptom Checker!");
  let severity = enterSymptoms();
  provideRecommendations(severity);
}

// Call the main function to start the program
main();

export default Symptom;