const Header = (function () {

    const header = document.querySelector("header");

    const init = () => {
        header.innerHTML = `
        <h1 class="title">
            SkyCast
            <span class="material-symbols-outlined cloud  animate__animated animate__delay-1s animate__slow animate__flipInX"> cloud </span>
            <div class="aurora">
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            </div>
        </h1>
    `;
    }

    const removeHeader = () => {
        header.style.display = "none";
    }

    const addHeader = () => {
        header.style.display = "flex";
    }

    return { init, removeHeader, addHeader }
})();

export default Header;

