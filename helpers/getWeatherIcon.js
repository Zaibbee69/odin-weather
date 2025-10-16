// iconMapper.js
const iconMap = {
    "clear-day": "wb_sunny",
    "clear-night": "nightlight",
    "partly-cloudy-day": "partly_cloudy_day",
    "partly-cloudy-night": "nights_stay",
    "cloudy": "cloud",
    "overcast": "cloud",
    "rain": "rainy",
    "showers-day": "rainy",
    "showers-night": "rainy",
    "snow": "ac_unit",
    "snow-showers-day": "cloudy_snowing",
    "snow-showers-night": "cloudy_snowing",
    "sleet": "cloudy_snowing",
    "freezing-rain": "hail",
    "hail": "hail",
    "thunderstorm": "thunderstorm",
    "tstorm-day": "thunderstorm",
    "tstorm-night": "thunderstorm",
    "fog": "foggy",
    "mist": "foggy",
    "haze": "deblur",
    "wind": "air",
    "tornado": "tornado",
};

export default function getWeatherIcon(iconKey) {
    return iconMap[iconKey] || "help";
}
