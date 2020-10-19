console.log("See ya, Space Cowboy");

var buttonOnClick = document.querySelector("button").onclick;

function rand(){ // 0 to 100 randomization
    return Math.floor((Math.random() * 100) + 1);
}

function result(){
    var result = document.getElementById("result");
    
    result.value = "Your result is: " + rand();
}

buttonOnClick = function(event) {
    result();
}

function randomizeRace(){
    let result = kalimshorRaces[Math.floor(Math.random()*kalimshorRaces.length)];
    if (result === "Rare"){
       return result = otherRaces[Math.floor(Math.random()*otherRaces.length)]
    } else {
        return result;
    }
}

function randomizeRareRace(){
    return otherRaces[Math.floor(Math.random()*otherRaces.length)];
}

const kalimshorRaces = [
    "Gnome",
    "Half-Orc",
    "Dwarf",
    "Halfling",
    "Elf",
    "Half-elf",
    "Orc",
    "Human",
    "Human",
    "Rare"
]

const otherRaces = [
    "Tabaxi",
    "Tiefling",
    "Aasimar",
    "Triton",
    "Dragonborn",
    "Warforged",
    "Lizardfolk",
    "Kenku",
    "Hobgoblin",
    "Firbolg",
    "Genasi",
    "Goliath",
    "Bugbear",
    "Aarakroca",
    "Leonin",
    "Satyr",
    "Kobold",
    "Goblin",
    "Yuan-ti Pureblood",
    "Tortle",
    "Changeling",
    "Kalashtar",
    "Shifter",
    "Gith",
    "Centaur",
    "Minotaur", 
    "Verdan",
    "Grung",
    "Locathah",
    "Gemlings (Kalimshor Unique)"
]