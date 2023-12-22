function dateFormatter(rawDateAndTime) {

    const rawDate = rawDateAndTime.split("T");
    const dateArray = rawDate[0].split("-");
    dateArray[1] = dateArray[1] - 1;

    const date = new Date(dateArray[0], dateArray[1], dateArray[2])

    const options = {
        year: "numeric",
        month: "long",
        day: "numeric",
    };

    return date.toLocaleDateString("nl-NL", options);
}

export default dateFormatter;