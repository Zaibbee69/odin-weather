import Header from "../components/Header.js"
import SearchSection from "../components/SearchSection.js"

const LandingPage = (function () {
    const init = () => {
        Header();
        SearchSection();
    }

    return { init }
})()

export default LandingPage;