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

function raceRandomizer(){
    let result = randomizeRace(kalimshorRaces);
    if (result === "Rare"){
        result = randomizeRace(rareRaces)
        if (result === "Very Rare") {
            return randomizeRace(veryRareRaces);
        }
        return result;
    } else {
        return result;
    }
}

function randomizeRace(arrayName){
    return arrayName[Math.floor(Math.random()*arrayName.length)];
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

const rareRaces = [
    "Tabaxi",
    "Tiefling",  
    "Dragonborn",
    "Warforged",
    "Hobgoblin",
    "Firbolg",
    "Bugbear",
    "Aarakroca",
    "Kobold",
    "Goblin",
    "Very Rare",
    "Very Rare",
    "Very Rare"
    // Intentionally repeating for increasing chances, without this we have just 0.013% vs 0.23%
    
]

const veryRareRaces = [
    "Triton",
    "Aasimar",
    "Lizardfolk",
    "Genasi",
    "Goliath",
    "Kenku",
    "Leonin",
    "Satyr",
    "Yuan-ti Pureblood",
    "Tortle",
    "Verdan",
    "Grung",
    "Locathah",
    "Changeling",
    "Kalashtar",
    "Shifter",
    "Gith",
    "Centaur",
    "Minotaur",
    "Gemlings (Kalimshor Unique)"
]