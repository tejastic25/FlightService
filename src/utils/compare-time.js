const CompareTime = (string1, string2) => {
    x = new Date(string1);
    y = new Date(string2);
    return x.getTime() < y.getTime();
}
module.exports = CompareTime;