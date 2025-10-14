export default function dateParse(dateString) {
    const date = new Date(dateString);

    const day = date.getDate();

    const getOrdinal = (n) => {
        if (n > 3 && n < 21) return "th";
        switch (n % 10) {
            case 1: return "st";
            case 2: return "nd";
            case 3: return "rd";
            default: return "th";
        }
    };

    const ordinalDay = `${day}${getOrdinal(day)}`;

    const weekday = date.toLocaleDateString('en-US', { weekday: 'long' });
    const year = date.getFullYear();

    return `${weekday} ${ordinalDay}, ${year}`;
}