const ApiHandler = (function () {

    const parseApiData = (data) => {

        const { currentConditions, resolvedAddress, days } = data;

        const parsedData = {
            currentData: {
                temperature: currentConditions.temp,
                humidity: currentConditions.humidity,
                icon: currentConditions.icon,
                visibility: currentConditions.visibility,
                windSpeed: currentConditions.windspeed,
                time: currentConditions.datetime
            },

            daysData: days.map(day => ({
                date: day.datetime,
                conditions: day.conditions,
                temperature: day.temp,
                icon: day.icon,
                hours: day.hours.map(hour => ({
                    time: hour.datetime,
                    temperature: hour.temp,
                    conditions: hour.conditions,
                }))
            })),
            location: resolvedAddress
        }

        return parsedData;
    }

    const makeApiCall = async (location = "England") => {
        try {
            const API = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?unitGroup=us&elements=datetime%2CdatetimeEpoch%2Cname%2Caddress%2CresolvedAddress%2Ctempmax%2Ctempmin%2Ctemp%2Cfeelslike%2Chumidity%2Cwindspeed%2Cvisibility%2Cconditions%2Cdescription%2Cicon&include=current%2Chours&key=GZNMDFFZ7P6DHZVZG5C8JKXMQ&contentType=json`

            const response = await fetch(API);
            const data = await response.json();
            return parseApiData(data);
        }
        catch (error) {
            console.error("API call failed:", error);
            return null;
        }
    }

    return { makeApiCall }
})()


export default ApiHandler;
