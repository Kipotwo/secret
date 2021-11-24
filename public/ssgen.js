var participants = ["Aron", "Adrian", "Spencer", "Tristan", "Josh"]
var backup = "placeholder"

function getIndex(max){
    return Math.floor(Math.random() * max);
}

function getName(){
    var pIndex = getIndex(participants.length);
    var name = participants[pIndex]
    
    if (participants.length != 0){
        alert("You will be buying a gift for " + name + "!");
        backup = name
        participants.splice(pIndex, 1);
    }
    else {
        alert("All of the names are taken!")
    }
}

function whoopsie(){
    if (!participants.includes(backup)){
        participants.push(backup);
        alert("Fixed!")
    }
    else {
        alert("Nothing happened.")
    }
}

