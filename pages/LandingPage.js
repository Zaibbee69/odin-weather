import Header from "../components/Header.js"
import SearchSection from "../components/SearchSection.js"

const LandingPage = (function () {
    const init = () => {
        Header.init();
        SearchSection.init();
    }

    const removeLandingPage = () => {
        Header.removeHeader();
        SearchSection.removeSearchSection();

    }

    const addLandingPage = () => {
        Header.addHeader();
        SearchSection.addSearchSection();
    }

    return { init, removeLandingPage, addLandingPage }
})()

export default LandingPage;