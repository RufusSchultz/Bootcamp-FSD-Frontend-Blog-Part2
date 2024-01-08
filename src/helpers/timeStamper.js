function timeStamper() {
    const event = new Date();
    return event.toISOString();
}

export default timeStamper;