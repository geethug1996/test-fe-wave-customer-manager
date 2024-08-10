# Customer Information Management

## Overview

This application is designed to manage customer information. It retrieves data from an API endpoint, displays a list of customers, and allows the user to edit and submit customer details. The app is built using React and Material-UI and supports basic validation and responsiveness.

## Features

- Fetches customer data from `https://waveaccounting.github.io/se-challenge-fe-customers/settings.json`.
- Displays a list of customers.
- Allows the user to select a customer for editing.
- Shows a form to edit customer details including name, email, channel, address, postal code, city, and province.
- Requires name and email fields to be filled before submission.
- Logs the JSON payload to the console upon form submission.
- Includes basic styling with responsiveness for both desktop and mobile devices.

## Directory Structure

/src /components CustomerManagerPage.js # Main component for displaying and editing customers
styles.css # CSS styles for the application
/hooks useFetch.js # Custom hook for data fetching
/pages HomePage.js # Home page component
App.js # Root component that integrates the customer manager
index.js # Entry point for the React application

## Setup Instructions

1. **Clone the repository:**
   ```bash
   git clone https://github.com/geethug1996/se-challenge-fe-customers
   
   
npm install
npm start
This will start the development server 

Access the application: Open http://localhost:3000 in  web browser to view the application.

Technical Details
Data Fetching: Uses the useFetch custom hook for retrieving customer data.
State Management: Utilizes React’s useState and useEffect hooks for managing and updating the component state.
Form Handling: Includes validation for required fields and provides error feedback.


What I'm Proud Of
I am particularly proud of the use of the useFetch custom hook for data fetching, which keeps the code modular and reusable. This approach separates data fetching logic from the UI components, followed single responsibility principle,making the codebase cleaner and more maintainable. Additionally, the form validation ensures that critical fields like name and email are not left empty, enhancing the user experience.



