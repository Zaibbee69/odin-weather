import ApiHandler from "./api/ApiHandler.js";


import LocationHeader from "../components/LocationHeader.js";
import CurrentDaySection from "../components/CurrentDaySection.js";
import WeekSection from "../components/WeekSection.js";
import HoursSection from "../components/HoursSection.js";
import WeatherImgSection from "../components/WeatherImgSection.js";

const IndexPage = (function () {

    let location, date, currentTemp, currentConditions, currentWind, currentIcon, currentHumidity, daysData, hoursData;

    const showWeather = async () => {
        const weatherData = await ApiHandler.makeApiCall();
        location = weatherData.location;
        date = weatherData.daysData[0].date;
        currentTemp = weatherData.currentData.temperature;
        currentConditions = weatherData.daysData[0].conditions;
        currentWind = weatherData.currentData.windSpeed;
        currentIcon = weatherData.currentData.icon;
        currentHumidity = weatherData.currentData.humidity;
        daysData = weatherData.daysData;
        hoursData = weatherData.daysData[0].hours;

        init(location, date, currentTemp, currentConditions, currentWind, currentHumidity, daysData, hoursData, currentIcon);
    }


    const removeIndexPage = () => {
        LocationHeader.removeLocationHeader()
        CurrentDaySection.removeCurrentDayCtn()
        WeatherImgSection.removeWeatherImgSection()
        WeekSection.removeWeekSectionCtn()
        HoursSection.removeHoursSectionCtn()
    }

    const addIndexPage = () => {
        LocationHeader.addLocationHeader()
        CurrentDaySection.addCurrentDayCtn()
        WeatherImgSection.addWeatherImgSection()
        WeekSection.addWeekSectionCtn()
        HoursSection.addRemoveHoursSection()
    }

    const init = (location, date, currentTemp, currentConditions, currentWind, currentHumidity, daysData, hoursData, currentIcon) => {
        LocationHeader.init(location, date);
        CurrentDaySection.init(currentTemp, currentConditions, currentWind, currentHumidity);
        WeatherImgSection.init(currentIcon);
        WeekSection.init(daysData);
        HoursSection.init(hoursData);
    }

    return { init, removeIndexPage, addIndexPage }

})();

export default IndexPage;