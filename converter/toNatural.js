// toNatural.js

function toNatural(date) {
    return convertMonth(date.getMonth()) + " " + date.getDate() + ", " + date.getFullYear();
}

function convertMonth(month) {
    var monthMap = {
        0: "January",
        1: "Feburary",
        2: "March",
        3: "April",
        4: "May",
        5: "June",
        6: "July",
        7: "August",
        8: "September",
        9: "October",
        10: "November",
        11: "December"
    };
    return monthMap[month];
}

module.exports = toNatural;