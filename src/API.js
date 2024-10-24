import axios from 'axios';

const API = axios.create({
  baseURL: 'https://your-backend-url.com/api',
});

export const addPatient = (patient) => API.post('/patients', patient);
export const getPatients = () => API.get('/patients');
