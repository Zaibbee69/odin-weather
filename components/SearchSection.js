export default function SearchSection() {
    const searchSection = document.getElementById("input-ctn");
    searchSection.innerHTML = `
        <h2>Know the weather before it knows you.</h2>
        <form>
            <input
            type="search"
            name="search"
            placeholder="Search"
            aria-label="Search"
            />
            <button class="outline contrast" type="submit">Search</button>
        </form>
      `
}