import LocationHeader from "../components/LocationHeader.js";
import CurrentDaySection from "../components/CurrentDaySection.js";
import WeekSection from "../components/WeekSection.js";
import HoursSection from "../components/HoursSection.js";
import WeatherImgSection from "../components/WeatherImgSection.js";

const IndexPage = (function () {

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