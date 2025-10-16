import LandingPage from "./pages/LandingPage.js";
import IndexPage from "./pages/IndexPage.js";

const App = (function () {

    let pageSwitch = true;
    const generateLandingPage = () => LandingPage.init();
    const generateIndexPage = (location, date, currentTemp, currentConditions, currentWind, currentHumidity, daysData, hoursData, currentIcon) =>
        IndexPage.init(location, date, currentTemp, currentConditions, currentWind, currentHumidity, daysData, hoursData, currentIcon);


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

