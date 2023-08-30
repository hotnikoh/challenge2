const myName = "Hotniko Hildebrandus";

const namaKu = function(inputNama){
    return inputNama;
}
console.log(namaKu(myName))

const upperName = function(inputNama) {
    let upName = inputNama.toUpperCase();
    return upName;
}
console.log(upperName(myName))

const lowerName = function(inputNama){
    let lowName = inputNama.toLowerCase();
    return lowName;
}
console.log(lowerName(myName))

const firstLetter = function(inputNama){
    let name1st = inputNama[0];
    return name1st;
}
console.log(firstLetter(myName))

const nameSlice = function(inputNama){
    let nameSlc = inputNama.slice(0,8);
    return nameSlc;
}
console.log(nameSlice(myName))

const nameLoveJS = " Love Java Script!";

const loveJs = function(inputNama){
    let lvJvscrpt = inputNama + nameLoveJS;
    return lvJvscrpt;
}
console.log(loveJs(myName))

const nameLastCharacter = function (inputNama){
    let nameLastChar = inputNama.slice(-1);
    return nameLastChar;
}
console.log(nameLastCharacter(myName))