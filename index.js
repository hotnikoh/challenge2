console.log("=====CHALLENGE NO 1=====")
console.log("=====UBAH MENJADI FUNCTION=====")

// Manipulasi Strng

console.log("===MANIPULASI STRING===");

let namaku = "Hotniko Hildebrandus";
    function myName(namaku) {
    return namaku;
}
console.log(myName(namaku))

function upperName(namaku){
    let upName = namaku.toUpperCase ();
    return upName
}
console.log(upperName(namaku))

function lowerName(namaku){
    let dnName = namaku.toLowerCase ();
    return dnName;
}
console.log(lowerName(namaku))

function firstLetter(namaku){
    let name1st = namaku[0];
    return name1st;
}
console.log(firstLetter(namaku))

function nameSlice(namaku){
    let slcName = namaku.slice(0,8);
    return slcName;
}
console.log(nameSlice(namaku))

let nameLoveJS = " Love Java Script"

function loveJs(namaku){
    let lvJs = namaku + nameLoveJS;
    return lvJs;
}
console.log(loveJs(namaku))

function nameLastchar(namaku){
    let nameLastch = namaku.slice(-1);
    return nameLastch;
}
console.log(nameLastchar(namaku))

// //Mengubah Tipe Data

console.log("===MENGUBAH TIPE DATA===");

let age = "29"
let height = "173"

function ageTonumber(age){
    let ageTonum = parseInt(age);
    return ageTonum
}
console.log(ageTonumber(age))

function heightTofloat(height){
    let heightToflo = parseFloat(height);
    return heightToflo
}
console.log(heightTofloat(height))

// //Pengecekan Tipe Data

console.log("===PENGECEKAN TIPE DATA===");

let data = true;
let no1 = 20;
let no2 = "Main Gitar";

function tipeData(data){
    let tipeDt = typeof(data);
    return tipeDt
}
console.log(tipeData(data))

function tipeNo1(no1){
    let tiperNum1 = typeof(no1);
    return tiperNum1
}
console.log(tipeNo1(no1))

function tipeNo2(no2){
    let tipeNum2 = typeof(no2);
    return tipeNum2;
}
console.log(tipeNo2(no2))

// //Number

console.log("===PENJUMLAHAN DAN PENGURANGAN===");

let num1 = 10;
let num2 = 5;

function addition(num1, num2){
    let adds = num1 + num2;
    return adds;
}
console.log(addition(num1, num2) + " => Penjumlahan")

function substraction(num1, num2){
    let subs = num1 - num2;
    return subs;
}
console.log(substraction(num1, num2) + " => Pengurangan")

console.log("===PERKALIAN DAN PEMBAGIAN");

let num3 = 6;
let num4 = 2;

function multiplication(num3, num4){
    let multiples = num3 * num4;
    return multiples;
}
console.log(multiplication(num3, num4) + " => Perkalian")

function division(num3, num4){
    let divs = num3 / num4;
    return divs
}
console.log(division(num3, num4) + " => Pembagian")

// //Pangkat bilangan

console.log("===PANGKAT BILANGAN===");

let base = 3;
let exponent = 4;

function powers(base, exponent){
    let pows = Math.pow (base, exponent);
    return pows;
}
console.log(powers(base, exponent) + " => Pemangkatan")

// //Rata-rata dari array

console.log("===RATA-RATA DARI ARRAY===");

let arrayNumber = [5, 8, 12, 4, 6]
let arrayTotal = 0

function arrayNich(arrayNumber, arrayTotal){
    for (let i = 0; i < arrayNumber.length ; i++){
        arrayTotal += arrayNumber[i];
    }
    result = arrayTotal / arrayNumber.length;
    return result;
}
console.log(arrayNich(arrayNumber, arrayTotal))

// //Bilangan ganjil atau genap

console.log("===BILANGAN GANJIL ATAU GENAP===");

let num5 = 8;

function evens(num5){
    if (num5 %2 == 0){
    console.log(num5 + " => Bilangan Genap");
}
else {
    console.log(" => Bilangan ganjil");
}
}
console.log(evens(num5))

// //Random

console.log("===RANDOM===");

function randomMath(){
    let randomNo = Math.floor(Math.random()*3);
    return randomNo;
}
console.log(randomMath())

// Challenge NO 2

console.log("=====CHALLENGE NO 2======")
console.log("=====CELCIUS TO FAHRENHEIT=====")

let celcius = 20;

function celciusTofahrenheit(celcius){
    let celcToFahrn = (celcius * 9/5) + 32;
    return celcToFahrn;
}
console.log(celciusTofahrenheit(celcius))


//Challenge NO 3

console.log("=====CHALLENGE NO 3=====")
console.log("=====BASE EXPONENT=====")

let base1 = 4;
let exponent1 = 3;

function baseExponent(base1, exponent1){
    let bsExp = base1 ** exponent;
    return bsExp
}
console.log(baseExponent(base1, exponent1))

//Challenge NO 4
console.log("=====CHALLENGE NO 4=====")
console.log("=====VOWELS=====")

function vowels(letter){
    if (letter === "a" || letter === "i"  || letter === "u"  || letter === "e" || letter === "o"){
        console.log("Vocal");
    }
    else {
        console.log("Consonant");
    }
}
let letter = "e";
console.log(vowels(letter))
