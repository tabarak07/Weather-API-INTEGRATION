#API-INTEGRATION

*COMPANY*: CODTECH IT SOLUTIONS

*NAME*: TABARAK ZAFAR

*INTERN ID*: COD94278

*DOMAIN*: FULL STACK WEB DEVELOPMENT

*DURATION*: 6 WEEKS

*MENTOR*: NEELA SANTOSH

#Description

The Weather App is a simple yet powerful web application that allows users to check the current weather conditions for any city around the world. Built using modern JavaScript, HTML, and CSS, this application fetches weather data from the OpenWeatherMap API and displays it in a user-friendly interface. The app is designed to be responsive and easy to use, making it accessible for users of all ages.

Features
City Weather Lookup: Users can enter the name of any city to retrieve current weather information.
Dynamic Weather Display: The app dynamically updates the weather information without needing to refresh the page.
Error Handling: If the user inputs an invalid city name or if there is an issue fetching data, the app provides appropriate error messages.
Responsive Design: The application is designed to work on various screen sizes, ensuring a good user experience on both desktop and mobile devices.
Technologies Used
HTML: The structure of the web application is built using HTML5, providing a semantic layout.
CSS: The styling of the application is done using CSS, ensuring a clean and modern look.
JavaScript: The application logic is implemented in JavaScript, allowing for dynamic content updates and API interactions.
OpenWeatherMap API: The app utilizes the OpenWeatherMap API to fetch real-time weather data based on user input.
File Structure
The project consists of several files organized into a structured format:

index.html: The main HTML file that serves as the entry point for the application. It contains the layout and structure of the app.
styles.css: The CSS file that styles the application, providing a visually appealing interface.
weatherService.js: A JavaScript module that handles API requests to fetch weather data.
main.js: The main JavaScript file that manages user interactions and updates the UI with weather data.
uiRenderer.js: A module responsible for rendering the weather data on the webpage.
Detailed File Descriptions
index.html
This file contains the basic structure of the Weather App. It includes:

A header with the app title.
A main section where users can input the city name and submit the form to get weather data.
A section to display the fetched weather information.
A footer with copyright information.
The HTML is structured to be semantic, making it easier for search engines and assistive technologies to understand the content.

styles.css
The CSS file provides styling for the application. Key features include:

General styles for the body, header, and footer to ensure a consistent look and feel.
Specific styles for the weather display section, including padding, background color, and font sizes.
Responsive design elements to ensure the app looks good on both desktop and mobile devices.
weatherService.js
This JavaScript module is responsible for interacting with the OpenWeatherMap API. It contains:

An API key for authentication.
A function getWeather(city) that takes a city name as input, constructs the API request URL, and fetches the weather data. The function returns a promise that resolves with the weather data in JSON format.
main.js
The main JavaScript file handles user interactions. It includes:

An event listener for the DOMContentLoaded event to ensure the DOM is fully loaded before executing scripts.
A form submission handler that prevents the default form submission behavior, retrieves the city name from the input field, and calls the getWeather function.
Error handling to manage cases where the city input is empty or if there is an error fetching data from the API.
uiRenderer.js
This module is responsible for rendering the weather data on the webpage. It includes:

A function displayWeather(weatherData) that takes the weather data object and extracts relevant information such as temperature, humidity, wind speed, and sunrise/sunset times.
The function formats the temperature from Kelvin to Celsius and adjusts the sunrise and sunset times based on the local timezone.
It updates the inner HTML of the weather container with the formatted weather information.
How to Use
Open the index.html file in a web browser.
Enter the name of a city in the input field.
Click the "Get Weather" button.
The current weather information for the specified city will be displayed below the form.
Conclusion
The Weather App is a straightforward yet effective tool for checking the weather. It demonstrates the use of modern web technologies and best practices in web development. Users can easily interact with the app to get real-time weather updates, making it a valuable resource for anyone looking to stay informed about weather conditions. The project can be further enhanced by adding features such as a 5-day forecast, user location detection, or saving favorite cities for quick access.


#OUTPUT
![Image](https://github.com/user-attachments/assets/b7e3c9e7-fafa-4004-8ca0-39f520449043)
