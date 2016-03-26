// toTimeObj.js

var toNatural = require('./toNatural');

function toTimeObj(date) {
    if (isNaN(date.getTime())) {
        return {
            unix: null,
            natural: null
        };
    }
    return {
        unix: date.getTime(),
        natural: toNatural(date)
    }
}

module.exports = toTimeObj;