// function penambahan(x, y) {
//     return x + y;
// }

// function pengurangan(x, y) {
//     return x - y;
// }

// function perkalian(x, y) {
//     return x * y;
// }

// function pembagian(x, y) {
//     if (y === 0) {
//         return "Tidak dapat dibagi dengan 0";
//     }
//     return x / y;
// }

// function calculator(operation, x, y) {
//     switch (operation) {
//         case "+":
//             return penambahan(x, y);
//         case "-":
//             return pengurangan(x, y);
//         case "*":
//             return perkalian(x, y);
//         case "/":
//             return pembagian(x, y);
//         default:
//             return "Operasi tidak valid";
//     }
// }

// const operation = "*";
// const num1 = 10;
// const num2 = 5;

// const result = calculator(operation, num1, num2);
// console.log(`Hasil: ${result}`);


// SAMPLE 2


let input1 = 10
let input2 = 5
let operation = "/"

function calculator(input1, input2, operation) {
    if (typeof input1 !== "number" || typeof input2 !== "number") {
        return "Invalid input, input must be a number";
    }

    if (operation =="+"){
        return input1 + input2;
    } 
    else if (operation == "-") {
        return input1 - input2;
    }
    else if (operation == "*") {
        return input1 * input2;
    }
    else if (operation == "/") {
        return input1 / input2;
    }
}

let result = calculator (input1, input2, operation);
console.log (result);