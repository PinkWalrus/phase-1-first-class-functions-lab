const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2);
}

const selectingDrivers = [
    returnFirstTwoDrivers,
    returnLastTwoDrivers
];

const createFareMultiplier = function (multiply) {
    return function (fareMultiplier) {
        return multiply * fareMultiplier;
    }
}

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(drivers);
}