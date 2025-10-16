import timeParse from "./timeParse.js";

export default function generateFiveHours(hoursData) {
  const fiveHours = hoursData.slice(0, 5);
  console.log(timeParse(hoursData[0].time))


  const html = fiveHours
    .map(hour => `
      <div class="glass-box single-day animate__animated animate__slow animate__flipInX">
        <h1>${timeParse(hour.time)}</h1>
        <hgroup>
          <h2>${Math.round(hour.temperature)}<sup><small>°C</small></sup></h2>
          <h3>${hour.conditions}</h3>
        </hgroup>
      </div>
    `)
    .join("");

  return html;
}
