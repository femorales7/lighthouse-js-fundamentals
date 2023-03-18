function isOdd(num){
  return num % 2 !== 0;
}
console.log(isOdd(11));


var team = ["Oliver Wood", "Angelina Johnson", "Katie Bell", "Alicia Spinnet", "George Weasley", "Fred Weasley", "Harry Potter"];

function hasEnoughPlayers(other) {
    if (other.length >= 7)
        return true; // true is a boolean value. Do not return a string "true"
    else 
        return false; // false is also a boolean value. Do not return a string "false"
}
console.log(hasEnoughPlayers(team));
var valor = team.length
console.log(valor)