import dateParse from "../helpers/dateParse.js";


const LocationHeader = (function (location = "England, UK", date = "Friday, 13th") {
    const header = document.querySelector("header");

    const addLocationHeader = () => {
        header.style.display = "flex";

    }

    const removeLocationHeader = () => {
        header.style.display = "none";

    }

    const init = (location, date) => {
        const parsedDate = dateParse(date);

        header.innerHTML = `<h2 class="header-name animate__animated animate__slideInLeft animate__fast">
            <span class="material-symbols-outlined location"> location_on </span>
            ${location}
        </h2>
        <h3 class="header-date animate__animated animate__slideInRight animate__fast">
            <mark><small>${parsedDate}</small></mark>
        </h3>`;
    }

    return { init, addLocationHeader, removeLocationHeader }
})();

export default LocationHeader;

