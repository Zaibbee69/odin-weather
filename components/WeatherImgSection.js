import getWeatherIcon from "../helpers/getWeatherIcon.js";

const WeatherImgSection = (function () {
    const weatherImgSectionCtn = document.getElementById("weather-img-ctn");

    const init = (currentIcon) => {
        const icon = getWeatherIcon(currentIcon)
        weatherImgSectionCtn.innerHTML = `
            <span class="material-symbols-outlined current-icon animate__animated animate__fadeIn animate__slow"> ${icon} </span>
`
    }

    const removeWeatherImgSection = () => {
        weatherImgSectionCtn.style.display = "none";
    }

    const addWeatherImgSection = () => {
        weatherImgSectionCtn.style.display = "flex";
    }

    return { init, removeWeatherImgSection, addWeatherImgSection }

})();

export default WeatherImgSection;