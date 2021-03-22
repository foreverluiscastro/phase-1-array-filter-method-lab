// Code your solution here

function findMatching(arr, string) {
    return arr.filter(argument1 => argument1.toLowerCase() === string.toLowerCase());
}

function fuzzyMatch(arr, string) {
    return arr.filter(argument2 => argument2[0, 1] === string[0, 1]);
}

function matchName(Object, string) {
    return Object.filter(argument3 => argument3.name === string);
}