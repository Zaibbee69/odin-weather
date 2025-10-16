export default function timeParse(timeStr) {
    const today = new Date().toISOString().split("T")[0];
    const date = new Date(`${today}T${timeStr}`);

    return date.toLocaleTimeString("en-US", {
        hour: "numeric",
        hour12: true
    }).toUpperCase();
}
