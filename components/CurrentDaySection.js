const CurrentDaySection = (function (currentTemp, currentConditions, currentWind, currentHumidity) {
    const currentDayCtn = document.getElementById("current-ctn");

    const removeCurrentDayCtn = () => {
        currentDayCtn.style.display = "none";
    }

    const addCurrentDayCtn = () => {
        currentDayCtn.style.display = "block";
    }

    const init = (currentTemp, currentConditions, currentWind, currentHumidity) => {
        currentDayCtn.innerHTML = `
        <div>
            <hgroup>
                <h1 class="current-temp">
                ${currentTemp}<sup><small>&deg;C</small></sup>
                </h1>
                <h2 class="current-conditions">${currentConditions}</h2>
            </hgroup>
            </div>
            <div>
            <div>
                <hgroup>
                <h3>
                    <span class="material-symbols-outlined airwave"> airwave </span
                    >Wind
                </h3>
                <h5>${currentWind} Km/h</h5>
                </hgroup>
            </div>
            <div>
                <hgroup>
                <h3>
                    <span class="material-symbols-outlined humidity">
                    humidity_high </span
                    >Humidity
                </h3>
                <h5>${currentHumidity}%</h5>
                </hgroup>
            </div>
        </div>`;
    }

    return { init, addCurrentDayCtn, removeCurrentDayCtn }
})()

export default CurrentDaySection;