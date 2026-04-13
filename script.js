console.log("File begin");

// variables for the info section
let firstName = "Alec";
let birthYear = 2005;
let currentYear = 2026;

// auto fills blanks w/data from gb var and def global variables
function fillBlanks() {
    console.log("fillBlanks begin");

    const nameSpan = document.getElementById("name");
    nameSpan.innerText = firstName;

    const yearSpan = document.getElementById("year");
    yearSpan.innerText = birthYear;

    console.log("fillBlanks end");
}

// How old are you section
function howOld() {
    console.log("howOld begin");

    let years = currentYear - birthYear;
    alert(years);

    console.log("howOld end");
}

// Change globals section
function changeGlobals() {
    console.log("changeGlobals begin");

    firstName = "John Doe";
    birthYear = 1932;
    currentYear = 2026;

    console.log("changeGlobals end");
}

// Reset globals (goes back to default values)
function defaultGlobals() {
    console.log("defaultGlobals begin");

    firstName = "Alec";
    birthYear = 2005;
    currentYear = 2026;

    console.log("defaultGlobals end");
}

console.log("File end");
