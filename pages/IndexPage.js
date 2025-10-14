import LocationHeader from "../components/LocationHeader.js";

const IndexPage = (function () {

    const init = (location, date) => {
        LocationHeader(location, date);
    }

    return { init }

})();

export default IndexPage;