export default function Header() {
    const header = document.querySelector("header");
    header.innerHTML = `
        <h1 class="title">
            SkyCast
            <div class="aurora">
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            </div>
        </h1>
        <span class="material-symbols-outlined">
            cloud
            </span>
    `;
}