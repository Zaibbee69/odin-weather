import getWeatherIcon from "./getWeatherIcon.js";

export default function generateFourDays(daysData) {
  const fourDays = daysData.slice(0, 4);

  const getDayName = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-US", { weekday: "long" });

  const html = fourDays
    .map((day) => {
      const dayName = getDayName(day.date);
      const iconName = getWeatherIcon(day.icon);
      console.log("icon: ", iconName);
      return `
        <div class="day-ctn animate__animated animate__fast animate__fadeInUp">
          <span class="material-symbols-outlined day-icon">${iconName}</span>
          <hgroup>
            <h2>${dayName}</h2>
            <h3>${day.conditions}</h3>
          </hgroup>
          <h3>
            ${Math.round(day.temperature)}<sup><small>°C</small></sup>
          </h3>
        </div>
        <hr />
      `;
    })
    .join("");

  return html;
}
