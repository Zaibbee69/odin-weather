import LandingPage from "./pages/LandingPage.js";
import IndexPage from "./pages/IndexPage.js";
import ApiHandler from "./api/ApiHandler.js";

const App = (() => {
    let location, date, currentTemp, currentConditions, currentWind, currentIcon, currentHumidity, daysData, hoursData;
    let pageSwitch = false;

    const switchPages = () => {
        const styler = document.querySelector(".styler");
        if (!pageSwitch) {
            LandingPage.removeLandingPage();
            IndexPage.addIndexPage();
            styler.style.display = "none";
            pageSwitch = true;
        } else {
            init();
            pageSwitch = false;
            styler.style.display = "block";

        }
    };

    const generateIndexPage = (location, date, currentTemp, currentConditions, currentWind, currentHumidity, daysData, hoursData, currentIcon) =>
        IndexPage.init(location, date, currentTemp, currentConditions, currentWind, currentHumidity, daysData, hoursData, currentIcon);

    const showWeather = async (loc) => {
        const weatherData = await ApiHandler.makeApiCall(loc);

        location = weatherData.location;
        date = weatherData.daysData[0].date;
        currentTemp = weatherData.currentData.temperature;
        currentConditions = weatherData.daysData[0].conditions;
        currentWind = weatherData.currentData.windSpeed;
        currentIcon = weatherData.currentData.icon;
        currentHumidity = weatherData.currentData.humidity;
        daysData = weatherData.daysData;
        hoursData = weatherData.daysData[0].hours;

        switchPages()

        generateIndexPage(location, date, currentTemp, currentConditions, currentWind, currentHumidity, daysData, hoursData, currentIcon);

        const goBackBtn = document.getElementById("go-back");
        goBackBtn.addEventListener("click", () => switchPages())
    };

    const init = () => {
        IndexPage.removeIndexPage();
        LandingPage.addLandingPage();
        LandingPage.init(showWeather);
    };

    return { init, showWeather, switchPages };
})();

App.init();
