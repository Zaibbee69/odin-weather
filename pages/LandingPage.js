import Header from "../components/Header.js";
import SearchSection from "../components/SearchSection.js";

const LandingPage = (function () {
    let fuse;

    function initFuse(countries) {
        if (!countries.length) return;
        const options = { includeScore: true, threshold: 0.4 };
        fuse = new Fuse(countries, options);
    }

    function setupAutocomplete() {
        const input = document.getElementById("city-search");
        const suggestionsContainer = document.createElement("ul");
        suggestionsContainer.classList.add("suggestions");
        input.parentNode.appendChild(suggestionsContainer);

        input.addEventListener("input", () => {
            const query = input.value.trim();
            suggestionsContainer.innerHTML = "";
            if (!query || !fuse) return;

            const results = fuse.search(query).slice(0, 5);
            results.forEach((result) => {
                const li = document.createElement("li");
                li.textContent = result.item;
                li.addEventListener("click", () => {
                    input.value = result.item;
                    suggestionsContainer.innerHTML = "";
                });
                suggestionsContainer.appendChild(li);
            });
        });
    }

    const init = (showWeather) => {
        Header.init();
        SearchSection.init();

        // Wait for countries to load asynchronously
        const interval = setInterval(() => {
            const countries = SearchSection.getCountries();
            if (countries.length > 0) {
                clearInterval(interval);

                initFuse(countries);
                setupAutocomplete();

                const form = document.getElementById("location-form");
                form.addEventListener("submit", (e) => {
                    e.preventDefault();

                    const citySearch = document.getElementById("city-search");
                    const userValue = citySearch.value.trim().toLowerCase();

                    const valid = countries.some(
                        (country) => country.toLowerCase() === userValue
                    );

                    if (!valid) {
                        citySearch.setAttribute("aria-invalid", "true");
                        console.warn("Invalid country:", userValue);
                        return;
                    }

                    citySearch.setAttribute("aria-invalid", "false");
                    showWeather(userValue);
                });
            }
        }, 200);
    };

    const removeLandingPage = () => {
        Header.removeHeader();
        SearchSection.removeSearchSection();
    };

    const addLandingPage = () => {
        Header.addHeader();
        SearchSection.addSearchSection();
    };

    return { init, removeLandingPage, addLandingPage };
})();

export default LandingPage;
