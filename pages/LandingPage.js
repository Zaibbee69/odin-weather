import Header from "../components/Header.js"
import SearchSection from "../components/SearchSection.js"

const LandingPage = (function () {
    const init = (showWeather) => {
        Header.init();
        SearchSection.init();

        console.log(showWeather)
        const form = document.getElementById("location-form");
        form.addEventListener("submit", (e) => {
            e.preventDefault();
            const citySearch = document.getElementById("city-search").value.trim();
            console.log("Searched", citySearch)
            if (citySearch) showWeather(citySearch);
        });

        console.log(form)
    }

    const removeLandingPage = () => {
        Header.removeHeader();
        SearchSection.removeSearchSection();

    }

    const addLandingPage = () => {
        Header.addHeader();
        SearchSection.addSearchSection();
    }

    return { init, removeLandingPage, addLandingPage }
})()

export default LandingPage;