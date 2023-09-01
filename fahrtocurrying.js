function celciusTofahrenheit(celcius){
    return function() {
        let celcToFarhn = (celcius * 9/5) + 32;
        return celcToFarhn;
    }  
    
}

let celcius = 20;
let convrtCelcFahr = celciusTofahrenheit(celcius);
console.log(convrtCelcFahr())

//===================================

// function celciusToConverter(celsius) {
//     return function() {
//         let celcToFahrn = (celsius * 9/5) + 32;
//         return celcToFahrn;
//     };
// }

// const celcius = 20;
// const convertToCelsius = celciusToConverter(celcius);

// console.log(convertToCelsius());