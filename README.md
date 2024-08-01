![image](https://github.com/user-attachments/assets/e1e54c00-24bc-4f20-ae5d-f4f68effb272)# HORAE

<img src="https://media.discordapp.net/attachments/1268608877755236446/1268615870712643654/horae1.PNG?ex=66ad1219&is=66abc099&hm=fad56488aaa4751e980ca82e2480a4244316f7c1631501bf98b3e3d80244f30b&=&format=webp&quality=lossless&width=1419&height=676" alt="Home page screen"  style="width:600px; height:auto;">

<img src="https://media.discordapp.net/attachments/1268608877755236446/1268622394394939462/horae2.PNG?ex=66ad182c&is=66abc6ac&hm=869384577faaa8cd43d426ebebefe1a51cd6812417893be2ba9476738c8fc70f&=&format=webp&quality=lossless&width=1411&height=676" alt="exemple enter screen"  style="width:300px; height:auto;"><img src="https://media.discordapp.net/attachments/1268608877755236446/1268622393933435042/horae3.PNG?ex=66ad182c&is=66abc6ac&hm=4e8531fdb643a1fbc8d81ae417bd5fa0b1e2fbeedf6d0ff17aac5c80970dc37d&=&format=webp&quality=lossless&width=1397&height=676" alt="weather result screen"  style="width:300px; height:auto;">

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
