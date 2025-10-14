import dateParse from "../helpers/dateParse.js";


export default function LocationHeader(location = "England, UK", date = "Friday, 13th") {
    const header = document.querySelector("header");

    const parsedDate = dateParse(date);

    header.innerHTML = `<h2 class="header-name">
            <span class="material-symbols-outlined location"> location_on </span>
            ${location}
        </h2>
        <h3 class="header-date">
            <mark><small>${parsedDate}</small></mark>
        </h3>`;
}