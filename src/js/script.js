let result = "";
const length = 100;

for (let i = 1; i < length; i++) {
    for (let j = 0; j < i; j++) {
        result += "*";
    }
    result += "\n";
}

console.log(result);

function firstTask() {
    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        console.log(i);
    }
}

firstTask();

function secondTask() {
    // Пишем решение вот тут
    for (let i = 20; i >= 10; i--) {
        if (i === 13) {
            break;
        }
        console.log(i);
    }
}
secondTask();

function thirdTask() {
    for (let i = 2; i <= 10; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}

thirdTask();

// function fourthTask() {
//     for (let i = 2; i <= 16; i++) {
//         if (i % 2 === 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
//     }
// }
// fourthTask();

function fourthTask() {
    let i = 2;
    while (i <= 16) {
        if (i % 2 === 0) {
            i++;
            continue;
        } else {
            console.log(i);
            i++;
        }
    }
}
fourthTask();

function fifthTask() {
    const arrayOfNumbers = [];
    // Пишем решение вот тут
    for (let i = 5; i <= 10; i++) {
        arrayOfNumbers.push(i);
    }
    console.log(arrayOfNumbers);
    // Не трогаем
    return arrayOfNumbers;
}
fifthTask();
