import generateFiveHours from "../helpers/generateFiveHours.js";

const HoursSection = (function (hoursData) {

    const hoursSectionCtn = document.getElementById("days-ctn");

    const init = (hoursData) => {
        hoursSectionCtn.innerHTML = generateFiveHours(hoursData);

    }

    const removeHoursSectionCtn = () => {
        hoursSectionCtn.style.display = "none";
    }

    const addRemoveHoursSection = () => {
        hoursSectionCtn.style.display = "grid";
    }

    return { init, removeHoursSectionCtn, addRemoveHoursSection }

})()

export default HoursSection;

