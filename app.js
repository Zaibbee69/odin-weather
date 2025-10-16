import LandingPage from "./pages/LandingPage.js";
import IndexPage from "./pages/IndexPage.js";
import ApiHandler from "./api/ApiHandler.js";

const App = (function () {

    let location, date, currentTemp, currentConditions, currentWind, currentIcon, currentHumidity, daysData, hoursData;
    let pageSwitch = false;
    const generateLandingPage = () => LandingPage.init();
    const generateIndexPage = (location, date, currentTemp, currentConditions, currentWind, currentHumidity, daysData, hoursData, currentIcon) =>
        IndexPage.init(location, date, currentTemp, currentConditions, currentWind, currentHumidity, daysData, hoursData, currentIcon);

    const showWeather = async () => {
        const weatherData = await ApiHandler.makeApiCall();
        console.log("Time:", weatherData.daysData[0].hours)
        location = weatherData.location;
        date = weatherData.daysData[0].date;
        currentTemp = weatherData.currentData.temperature;
        currentConditions = weatherData.daysData[0].conditions;
        currentWind = weatherData.currentData.windSpeed;
        currentIcon = weatherData.currentData.icon;
        currentHumidity = weatherData.currentData.humidity;
        daysData = weatherData.daysData;
        hoursData = weatherData.daysData[0].hours;

        generateIndexPage(location, date, currentTemp, currentConditions, currentWind, currentHumidity, daysData, hoursData, currentIcon);
    }

    const switchPages = () => {
        if (!pageSwitch) {
            LandingPage.removeLandingPage();
            IndexPage.addIndexPage();
            showWeather();
        }

        if (pageSwitch) {
            IndexPage.removeIndexPage();
            LandingPage.addLandingPage();
            generateLandingPage();
        }
    }

    return { generateLandingPage, generateIndexPage, showWeather, switchPages }
})();

App.switchPages();

