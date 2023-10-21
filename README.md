# Form Validation in React with React-bootstrap and bootstrap
This is a simple React component that showcase a form with real-time validation check for name, email formal, phone number length, message limitation of 300 characters, radio and select with options

# Table of Content 
- Features
- Prerequisites
- Installation
- Usage
- Contribution

# Getting Started 
Clone this repository to get started with the project.
   ```
   git clone https://github.com/vchaitanya-dev/Form-validation.git
   ```
# Prerequisites 
Before using the React Component, ensure you have the following prerequisites: 
- Node.js and npm installed on your system.
# Installation 
To install the project and its dependencies, run the following commands: 
```
npm install react, react-bootstrap, bootstrap, json-server
```
# Usage 
1. Run the application using the following command:
   ```
    npm start 
   ```
2. Open your web browser and navigate to `http://localhost:3000` to access the form
3. Fill the form and it provide real-time validation feedback.
4. Start the server using the following command :
   ```
   npm run server
   ```
5. open your web browser and copy the url `http://localhost:3050` to access the form.
6. Enter the Button so it store the data of form on data.json.


# Validation 
The form providers validation for email, name, phone, message, radio, file, radio and select inputs.
- Email Validation: Validates that the email input contains the "@" symbol and ends with ".com". Changes the border-color are displayed in real-time for invalid email formats.
- Phone Number validation :Ensures the phone number input has exactly 10 digits. Changes the border-color are displayed instanly for phone numbers with an incorrect length.
- Message Characters Length: Ensures the message textarea has exactly 300 characters with spaces. Change the border-color are displayed instanly for more than 300 characters length.
- Name Validation : Validates that the name input length is 0 are not. Changes the border-color are displayed in real-time for name input field is empty
- Radio and Select Button : Ensures the choose your prefered radio and select button. Changes the values in real-time Radio and Select Button
- File Validation : Validates of file path and check if the file path or not

# Contributing 
Contribution to this project are welcome! if you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch for your changes.
3. Make your change and ensure that the code passes any existing texts.
4. Submit a pull request with a clear description of your changes.


