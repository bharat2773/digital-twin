# Digital Twin Healthcare Dashboard

This project is a **Digital Twin Dashboard** designed to manage and visualize real-time healthcare data from multiple patients. Each patient is represented by a digital twin (3D object), and the system collects sensor data from **ESP32** devices associated with each patient.

## Features
- Add and manage patient data (name, age, and associated sensors).
- Display a list of patients with real-time sensor data updates.
- Visualize each patient's digital twin in 3D, which reflects their real-time health data.
- Responsive and intuitive user interface built with **React** and **Three.js**.

## Technologies Used
- **React.js** for the front-end application.
- **Three.js** for 3D visualization of the digital twin.
- **CSS** for UI design and styling.
- **Axios** for handling HTTP requests to and from the backend.
- **ESP32** microcontroller for sensor data collection.

## Project Setup

### Prerequisites
- Node.js and npm installed on your system.
- Git installed.

### Steps to Run the Project Locally
1. Clone the repository:
    ```bash
    git clone https://github.com/bharat2773/digital-twin.git
    cd digital-twin
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```

4. Open your browser and go to `http://localhost:3000` to see the application in action.

### Add/Manage Patients
1. Navigate to the homepage where you can add new patients.
2. Fill in the patient's **name**, **age**, and **sensors** being used.
