import React, { useEffect, useState } from 'react';
import axios from 'axios';
import DigitalTwin from './DigitalTwin';

function DisplayPatients() {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    const fetchPatients = async () => {
      const response = await axios.get('/api/patients');
      setPatients(response.data);
    };
    fetchPatients();
  }, []);

  return (
    <div>
      <h1>Patients List</h1>
      {patients.map((patient) => (
        <div key={patient.id}>
          <h2>{patient.name}</h2>
          <p>Age: {patient.age}</p>
          <p>Sensors: {patient.sensors}</p>
          <DigitalTwin sensorData={patient.sensorData} />
        </div>
      ))}
    </div>
  );
}

export default DisplayPatients;
