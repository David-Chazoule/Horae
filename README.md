# HORAE

<img src="https://media.discordapp.net/attachments/1268608877755236446/1268615870712643654/horae1.PNG?ex=66ad1219&is=66abc099&hm=fad56488aaa4751e980ca82e2480a4244316f7c1631501bf98b3e3d80244f30b&=&format=webp&quality=lossless&width=1419&height=676" alt="Home page screen"  style="width:600px; height:auto;">
<img src="https://media.discordapp.net/attachments/1268608877755236446/1268615871023284394/horae2.PNG?ex=66ad1219&is=66abc099&hm=a05c66356a67009da3439d578e9179003f3132183bc892f2ba493b69a243814e&=&format=webp&quality=lossless&width=1008&height=676" alt="exemple enter screen"  style="width:300px; height:auto;"> <img src="https://media.discordapp.net/attachments/1268608877755236446/1268615871379673170/horae3.PNG?ex=66ad1219&is=66abc099&hm=4d881b91ea9bb8c7c159f80ee8a960ca8e83b3b27f209ff7a125529cfcde1fb6&=&format=webp&quality=lossless&width=1407&height=676" alt="weather result screen"  style="width:300px; height:auto;">

## Overview

This project is a web application designed to provide the current weather based on the provided location. It uses the OpenWeatherMap API to fetch weather data.

## Front-end Technologies

The front-end of this application is developed with the following technologies:

- **React.js**
- **TypeScript**
- **Sass**

## Installation and Execution

Follow these steps to set up and run the application locally:

1. **Install dependencies:**
```bash
npm install
```

2. **Start the application:**

```bash
npm start
```
Connecting to the API
To use this project, you will need an API key from [OpenWeatherMap](URLhttps://openweathermap.org/).

Obtain your API key:

Sign up or log in to OpenWeatherMap and generate an API key.
Configure the API key:

Create a .env file in the root directory of the project.
Add the following line to the .env file:
plaintext

```bash
REACT_APP_API_KEY=your_api_key_from_openweathermap.org
```
## Project Structure

Here's an overview of the project structure:

  - **src/**: Contains the source code for the application.
  - **components/**: Reusable React components.
  - **Helpers/**: Contains various utility functions used for processing and formatting weather data in the application.
  - **Hooks/**: Contains custom React hooks for managing state and API interactions.
  - **Types/**: Defines TypeScript types and interfaces used throughout the application.
  - **context/**: Context providers for managing application state.
  - **styles/**: Sass files for styling.
  - **utils/**: Utility functions and calculation services.

## How It Works

1. Enter your location: Input the city for which you want to know the weather.
