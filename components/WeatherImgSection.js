const WeatherImgSection = (function (currentIcon) {
    const weatherImgSectionCtn = document.getElementById("weather-img-ctn");

    const init = (currentIcon) => {
        weatherImgSectionCtn.innerHTML = `
            <span class="material-symbols-outlined current-icon"> ${currentIcon} </span>
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