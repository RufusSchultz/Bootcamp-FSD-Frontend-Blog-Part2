function readTimer(blog) {
    const array = blog.trim().split(" ");
    const readTime = Math.round(array.length / 100 * 0.3);

    //leestijd van 0 minuten voelt irreëel.
    if (readTime < 1) {
        return 1;
    } else {
        return readTime;
    }
}
// 0.3 minuten leestijd per 100 woorden
export default readTimer;