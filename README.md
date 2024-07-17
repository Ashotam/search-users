# search-users
React User Management App
This is a simple React application for managing user data, including email addresses and formatted numbers.

Features
User Form: Allows users to enter email addresses and formatted numbers.
Validation: Provides real-time validation for email addresses and number formats.
Submit: Submits user data to a backend service.
Reset: Resets the form after successful submission.
Technologies Used
React: Frontend JavaScript library for building user interfaces.
React Hook Form: For efficient form handling in React.
React Input Mask: Used for formatting and validating input fields.
axios: HTTP client for making backend API requests.
CSS Modules: Modular CSS for component-specific styling.
Installation
Clone the repository:

bash
Копировать код
git clone <repository-url>
cd react-user-management-app
Install dependencies:

bash
Копировать код
npm install
Create a .env file in the root directory and add the following environment variables:

env
Копировать код
REACT_APP_API_BASE_URL=http://localhost:5000/api
Replace http://localhost:5000/api with your backend API base URL if it's different.

Start the development server:

bash
Копировать код
npm start
Open your browser and visit http://localhost:3000 to view the app.

Usage
Enter a valid email address in the email input field.
Enter a number in the number input field following the format 99-99-99.
Click on the "Submit" button to submit the form. Upon successful submission, the form will reset.
