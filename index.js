// Code your solution in this file!

// return a new array containing the first two drivers in the array.
const returnFirstTwoDrivers = function(drivers) {
    return drivers.slice(0,2);
}

// return a new array containing the last two drivers in the array.
const returnLastTwoDrivers = function(drivers) {
    return drivers.slice(-2);
}

// This is an array containing two elements.
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// return a function that takes in a fare as an argument and quadruples the fare.
function createFareMultiplier(int) {
    return function (fare) {
        return fare * int;
    }
}

// function accepts a fare as its lone argument and doubles it.
const fareDoubler = function(fare) {
    return createFareMultiplier(2)(fare);
}

// function accepts a fare as its lone argument and triples it.
const fareTripler = function(fare) {
    return createFareMultiplier(3)(fare);
}

// return either the first two drivers or the last two drivers.
function selectDifferentDrivers(drivers, selectingDrivers) {
    return selectingDrivers(drivers);
}

