const SearchSection = (function () {
    const searchSection = document.getElementById("input-ctn");

    const init = () => {
        searchSection.innerHTML = `
        <h2>Know the weather before it knows you.</h2>
        <form id="location-form">
            <input
            type="search"
            name="search"
            placeholder="Search"
            aria-label="Search"
            id="city-search"
            />
            <button class="outline contrast" type="submit">Search</button>
        </form>
      `
    }

    const removeSearchSection = () => {
        searchSection.style.display = "none";
    }

    const addSearchSection = () => {
        searchSection.style.display = "flex";
    }

    return { init, removeSearchSection, addSearchSection };
})()

export default SearchSection;