import generateFourDays from "../helpers/generateFourDays.js";

const WeekSection = (function () {

    const weekSectionCtn = document.getElementById("week-ctn");

    const init = (daysData) => {
        weekSectionCtn.innerHTML = generateFourDays(daysData);

    }

    const removeWeekSectionCtn = () => {
        weekSectionCtn.style.display = "none";
    }

    const addWeekSectionCtn = () => {
        weekSectionCtn.style.display = "block";
    }

    return { init, removeWeekSectionCtn, addWeekSectionCtn }
})()

export default WeekSection;
