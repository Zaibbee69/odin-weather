import LandingPage from "./pages/LandingPage.js";
import IndexPage from "./pages/IndexPage.js";
import ApiHandler from "./api/ApiHandler.js";

const App = (function () {

    let location, date;

    const generateLandingPage = () => LandingPage.init();
    const generateIndexPage = () => IndexPage.init(location, date);

    const showWeather = async () => {
        const weatherData = await ApiHandler.makeApiCall();

        location = weatherData.location;
        date = weatherData.daysData[0].date;

        generateIndexPage(location, date)
        // Will do something here too
        return weatherData;
    }




    return { generateLandingPage, generateIndexPage, showWeather }
})()

// App.generateLandingPage();
App.showWeather();

