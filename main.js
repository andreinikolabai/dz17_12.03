const arr = [1, 2, 'ab', 'cd', 5, '&*', 6, 9, 10];
function getAverage() {
    let numbers = arr.filter(x => !isNaN(x));
    if (numbers.length == 0)
        return 0;
    let sum = numbers.reduce((prev, curr) => prev + curr);
    return sum / numbers.length;
};
console.log(`1. Дано масив з елементами різних типів = [${arr.join(', ')}]. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву = ${getAverage()}`);


function doMath(x, znak, y) {
    if (~znak.search(/[^+\-*/%^]/) || znak.length !== 1) return 'Помилка';
    return eval(x + znak.replace('^', '**') + y)
}
const x = prompt('2. Введіть x');
const y = prompt('2. Введіть y');
const znak = prompt('2. Введіть знак');
alert(doMath(x, znak, y));
console.log(`2. Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.`)
console.log(`${x} ${znak} ${y} = ${(doMath(x, znak, y))}`)


console.log(`3. Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.`);
function arrAdd() {
    let arr1 = [];
    let amount = prompt("3. Введіть довжину основного масиву");
    for(let i = 0; i < amount; i++) {
        arr1.push([]);
        let amount2 = prompt("Введіть кількість елементів внутрішнього масиву " + (i + 1));
        for(let j = 0; j < amount2; j++) {
            let elem = prompt("Введіть елемент " + (j + 1));
            arr1[i].push([elem]);
        }
    }
    console.log(arr1);
}
let functionResult = arrAdd();


console.log(`4. Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.`);
function deleteSymbol(string,elementsArray){
    let newString = "";
    for(let i = 0; i < string.length; i++){
        if(!elementsArray.includes(string[i])){
            newString += string[i];
        }
    }
    return newString;
}
let string = prompt("4. Введіть рядок");
let elementsString = prompt("4. Введіть символи, які потрібно видалити");
let elementsArray = elementsString.split("");
alert(deleteSymbol(string,elementsArray));
