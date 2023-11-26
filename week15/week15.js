//Задание 1
// Выведите числа от 1 до 10 в консоль
// let numbersFrom1To10 = 1;
// while (numbersFrom1To10 <=10 ){
//     console.log(`${numbersFrom1To10}`);
//     numbersFrom1To10++;
// }

//Задание 2
// Выведите чётные числа от 1 до 20 в консоль
// for(let i = 1; i <= 20; i++){
//     if (i % 2 == 0)
//     console.log(i);
// }
//Задание 3
// Выведите числа от 10 до 1 в консоль в обратном порядке
// const numbersArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const reverseArr = [];
// for(let i = numbersArr.length - 1 ; i >= 0; i--){
//     reverseArr.push(numbersArr[i]);
// }
// console.log(`${reverseArr}`);

//Задание 4
// Выведите таблицу умножения на 5 от 1 до 10
// for (let i = 1; i<=10; i++){
//     console.log(`${i} * 5 = ${i*5}`);
// }

//Задание 5
// Вычислить сумму чисел от 1 до 100 и вывести значение в консоль
// let sum = 0;
// let i = 1;
// while (i <= 100){
//     sum+=i;
//     i++;
// }
// console.log(sum);

//Задание 6
// Выведите все элементы массива в консоль используя цикл for
const array = [1, 2, 3, 4, 5];
// for(let i = 0; i < array.length; i++){
//     console.log(array[i]);
// }

//Задание 7
// Выведите сумму всех элементов массива используя цикл for
// const numbers = [1, 2, 3, 4, 5];
// let sum = 0;
// for(let i = 0; i < numbers.length; i++){
//     sum += numbers[i];
// }
// console.log(sum);

//Задание 8
// Напишите цикл for, который изменяет массив животных, делая их прекрасными! Например, если есть следующий массив: let animals = ["Кот", "Рыба", "Лемур"]; цикл должен сделать его таким: ["Кот - прекрасное животное", "Рыба - прекрасное животное", "Лемур - прекрасное животное"]
// Подсказка: вам понадобится переприсвоить значения для каждого индекса, то есть присвоить новые значения уже суще- ствующим элементам: animals[0] = animals[0] + " - прекрасное животное";
// let animals = ["Кот", "Рыба", "Лемур"];

// for (let i = 0; i < animals.length; i++) {
//     animals[i] = animals[i] + " - прекрасное животное";
//     console.log(animals[i]);
// }

//Задание 9
// Выведите символы в строке в консоль
// const str = 'Hello';
// for (let symbol of str){
//     console.log(symbol);
// }

//Задание 10
// Выведите все элементы массива в консоль используя цикл for...of. Массив array объявлен в Задании 6
// for ( let figure of array){
//     console.log(figure);
// }

//Задание 11
// Выведите каждое слово из массива строк в консоль
// Подсказка: вам понадобится метод массивов split
// const sentences = ['Hello, world!', 'How are you?'];
//   for (let i = 0; i < sentences.length; i++) {
//     const allWords = sentences[i].split(' ');

//     for (let n = 0; n < allWords.length; n++) {
//         console.log(allWords[n]);
//     }
// }
//Задание 12
// Выведите сумму всех элементов массива используя цикл for..of. Массив numbers объявлен в Задании 7
// let sum = 0;
// for (let num of numbers){
//    sum += num;
//  }
// console.log(sum);

//Задание 13
// Выведите длину каждого слова из массива строк в консоль
// const list = ['apple', 'banana', 'cherry'];
// for(let fruit of list){
//     console.log(fruit.length)
// }

//Задание 14
// Преобразуйте массив каждый элемент массива words в верхний регистр
// const words = ['Hello', 'world', '!'];
// for(let i = 0; i < words.length; i++){
//     const word = words[i];
//     const updatedWords = word.toUpperCase();
//     words[i] = updatedWords;
// }
// console.log(words);

//Задание 15
// Подсчитайте количество гласных букв в строке
// Подсказка: вам понадобится метод includes
// const greeting = 'Hello, world!';
// let vowelCount = 0;
// const vowels = ['a', 'e', 'i', 'o', 'u'];
// for(let i = 0; i < greeting.length; i++){
//     if (vowels.includes(greeting[i])){
//         vowelCount++
//     }

// }
// console.log(vowelCount);

//Задание 16
// Объедините все строки массива в одну строку с пробелами между ними
// const words = ['Hello', 'world', '!'];
// for(let i = 0; i < words.length; i++){
//     console.log(`${words[0]}  ${words[1]} ${words[2]}`);
// }

//Задание 17
// Выведите числа от 1 до 10 в консоль используя цикл while
// let number = 1;
// while(number <= 10){
//     console.log(number);
//     number++;
// }
//Задание 18
// Выведите числа от 1 до 10 в консоль в обратном порядке используя цикл while
// let number = 10;
// while(number >=1){
//     console.log(number);
//     number--;
// }

//Задание 19
// Проверьте, все ли элементы массива являются положительными числами используя цикл while
// Подсказка: используйте директиву break
// const allNumbers = [1, 2, 3, -4, 5];
// let allPositive = true;
// let i = 0;

// while(i < allNumbers.length){
//     if (allNumbers[i] <= 0){
//         allPositive = false; 
//         break;
//     }
//     i++
// }
// console.log(allPositive);

//Задание 20
// Выведите значения элементов массива до первого отрицательного числа используя цикл do...while
// const random = [2, 4, 6, -3, 8, 10];
// let i = 0;
// do{
//     console.log(random[i]);
//     i++
// }while(random[i] >= 1 && i<random.length);

//Задание 21
// Выведите числа от 1 до 100, пропуская числа, которые делятся на 3 используя цикл do...while
// let numbers =1 ;
// let i = 0;
// do{
//     if (numbers % 3 !== 0) {
//         console.log(numbers);
//     }
//         numbers++;
//         i++;
// }while(numbers <= 100);

//Задание 22
// Запросить у пользователя числа, пока сумма введенных чисел не станет больше 100
// let number;
// let sum = 0;
// do{
//     number = parseInt(prompt("Введите число: "));
//     if (number <= sum){
//     sum+= number;}

// }while(sum <= 100);
// console.log(`Сумма всех введенных вами чисел = ${sum}`);

//Задание 23
// Напишите функцию, которая изменит фоновый цвет всех элементов <h4> на странице на синий цвет
// function colorChange(){
//     let titles = document.getElementsByTagName('h4');
//     for(let i = 0; i<titles.length; i++){
//         titles[i].style.backgroundColor='blue';
//     }
// }
// document.addEventListener('DOMContentLoaded',colorChange);

//Задание 24
// Напишите генератор случайных строк до 6 символов
// Подсказка: используйте методы объекта Math и длину массива alphabet
// let alphabet = 'абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
// let randomString = '';
// function generateString(length){
//     for(let i = 0; i<length; i++){
//         let symbols = Math.floor(Math.random()*alphabet.length);
//         randomString+= alphabet[symbols];
//     }
// return randomString
// }
// let result = generateString(Math.floor(Math.random()*7));
// console.log(result);