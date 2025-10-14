export default function Header() {
    const header = document.querySelector("header");
    header.innerHTML = `
        <h1 class="title">
            SkyCast
            <span class="material-symbols-outlined cloud"> cloud </span>
            <div class="aurora">
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            <div class="aurora__item"></div>
            </div>
        </h1>
    `;
}