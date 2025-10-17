const SearchSection = (function () {
    const searchSection = document.getElementById("input-ctn");
    let countries = [];

    // --- Fetch countries dynamically ---
    async function fetchCountries() {
        try {
            const res = await fetch("https://restcountries.com/v3.1/all?fields=name,capital");
            const data = await res.json();
            countries = data.flatMap(c => [c.name.common, ...(c.capital || [])]);
            console.log("✅ Countries loaded:", countries.length);
        } catch (err) {
            console.error("❌ Failed to fetch countries:", err);
        }
    }

    // --- Render the search form ---
    function renderSearchForm() {
        searchSection.innerHTML = `
      <h2>Know the weather before it knows you.</h2>
      <form id="location-form">
          <input
            type="search"
            name="search"
            placeholder="Search country"
            aria-label="Search"
            id="city-search"
            autocomplete="off"
          />
          <button class="outline contrast" type="submit">Search</button>
      </form>
    `;
    }

    const init = () => {
        fetchCountries();
        renderSearchForm();
    };

    const removeSearchSection = () => {
        searchSection.style.display = "none";
    };

    const addSearchSection = () => {
        searchSection.style.display = "flex";
    };

    // 🧠 Export getter so LandingPage can access `countries`
    const getCountries = () => countries;

    return { init, removeSearchSection, addSearchSection, getCountries };
})();

export default SearchSection;
