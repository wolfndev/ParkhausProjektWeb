const Oeffnungszeiten_ueberprueffung = require('./Oeffnungszeiten_ueberprueffung')

const BeispielDatei = new Date(2020, 10, 1, 16, 4, 2, 0);
const BeispielDatei2 = new Date(2020, 10, 1, 23, 4, 2, 0);
const BeispielDatei3 = new Date(2020, 10, 3, 16, 4, 2, 0);
const BeispielDatei4 = new Date(2020, 10, 4, 21, 4, 2, 0);

console.log("Tag 0: Donnerstag"
        + "\nTag 1: Freitag"
        + "\nTag 2: Samstag"
        + "\nTag 3: Sonntag"
        + "\nTag 4: Montag"
        + "\nTag 5: Dienstag"
        + "\nTag 6: Mittwoch")

var element = document.body;
console.log(element.classList.toggle("darkmode"))
Oeffnungszeiten_ueberprueffung(BeispielDatei)
Oeffnungszeiten_ueberprueffung(BeispielDatei2)
Oeffnungszeiten_ueberprueffung(BeispielDatei3)
Oeffnungszeiten_ueberprueffung(BeispielDatei4)
