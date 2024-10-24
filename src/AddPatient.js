import React, { useState } from 'react';
import axios from 'axios';

function AddPatient() {
  const [patient, setPatient] = useState({ name: '', age: '', sensors: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/patients', patient);
    setPatient({ name: '', age: '', sensors: '' });
    alert('Patient Added');
  };

  return (
    <div>
      <h1>Add New Patient</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          value={patient.name}
          onChange={(e) => setPatient({ ...patient, name: e.target.value })}
          required
        />
        <input
          type="number"
          placeholder="Age"
          value={patient.age}
          onChange={(e) => setPatient({ ...patient, age: e.target.value })}
          required
        />
        <input
          type="text"
          placeholder="Sensors"
          value={patient.sensors}
          onChange={(e) => setPatient({ ...patient, sensors: e.target.value })}
          required
        />
        <button type="submit">Add Patient</button>
      </form>
    </div>
  );
}

export default AddPatient;
