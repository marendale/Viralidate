import React from 'react';
import './PatientRecords.css';

const PatientRecords = () => {
    const patientRecords = {
        testResults: [
            { date: '04/11/2024', type: 'Bloodwork', results: 'Normal' },
            // ... more test results
        ],
        medications: [
            { name: 'Amoxicillin', dose: '500mg', frequency: '3 times a day' },
            // ... more medications
        ],
        visitNotes: [
            { date: '04/10/2024', notes: 'Annual physical exam. All measurements within normal ranges.' },
            // ... more visit notes
        ],
        immunizationRecords: [
            { vaccine: 'Influenza', date: '10/12/2023', dose: 'Seasonal', provider: 'Anytown Clinic' },
            { vaccine: 'Tetanus', date: '03/11/2021', dose: 'Booster', provider: 'Anytown Clinic' },
            // ... more immunizations
        ]
    };

    return (
        <div className="patient-records-container">
            <h1>Patient Records</h1>
            
            <section className="records-section">
                <h2>Test Results</h2>
                <ul>
                    {patientRecords.testResults.map((test, index) => (
                        <li key={index}>
                            <span><strong>{test.date}</strong> - {test.type} - Results: {test.results}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="records-section">
                <h2>Medications</h2>
                <ul>
                    {patientRecords.medications.map((medication, index) => (
                        <li key={index}>
                            <span><strong>{medication.name}</strong> - {medication.dose} - {medication.frequency}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="records-section">
                <h2>Visit Notes</h2>
                <ul>
                    {patientRecords.visitNotes.map((visit, index) => (
                        <li key={index}>
                            <span><strong>{visit.date}</strong> - {visit.notes}</span>
                        </li>
                    ))}
                </ul>
            </section>

            <section className="records-section">
                <h2>Immunization Records</h2>
                <ul>
                    {patientRecords.immunizationRecords.map((immunization, index) => (
                        <li key={index}>
                            <strong>{immunization.vaccine}</strong> - {immunization.date} - Dose: {immunization.dose} - Provided by: {immunization.provider}
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
};

export default PatientRecords;
