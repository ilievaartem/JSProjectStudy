"use strict"

function fib(number){
    let result = '';
    let first = 0;
    let second = 1; 

    if(typeof(number) === 'number' || number !== 0 || !Number.isInteger(number)) {
        for(let i = 0; i < number; i++) {
            if (i + 1 === number) {
                result += `${first}`;
            } else {
                result += `${first} `;
            }
            let third = first + second;
            first = second;
            second = third;
        }    
    } else {
        return result;
    }

    console.log(result);
    return result;
}

fib(4);

first: for(let i = 0; i < 3; i++){
    console.log(`First level: ${i}`);
    for(let j = 0; j < 3; j++){
        console.log(`Second level: ${j}`);
        for(let k = 0; k < 5; k++){
            if(k === 2) break first;
            console.log(`Third level: ${k}`);
        }
    }
}
let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '').trim();

    while (numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    makeTest: function() {
        console.log("Test");
    }
};

function rememberMyFilm() {
    for(let i = 0; i < 2; i++){
        const a = prompt('Один з переглянутих останнії фільмів?', ''),
              b = prompt('На скільки його оціните?', '');
    
        if(a != null && b != null && a != '' && b != '' && a.length < 50){
            personalMovieDB.movies[a] = b;
        } else {
            i--;
        }
    }
}

rememberMyFilm();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10){
        console.log('Переглянуто мало фільмів')
    } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Ви звичайний глядач');
    } else if(personalMovieDB.count >= 30) {
        console.log('Ви кіноман');
    } else {
        console.log('Відбулася помилка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.private);

function writeYourGenres() {
    for(let i = 1; i < 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш улюблений жанр під номером${i}`);
    }
}

writeYourGenres();

let counter = 0;
for (const key in personalMovieDB) {
    if (typeof(personalMovieDB[key]) === 'object') {
        for (const i in personalMovieDB[key]) {
            console.log(`Властивість ${i} має значення ${personalMovieDB[key][i]}`);
            counter++;
        } 
    } else {
        console.log(`Властивість ${key} має значення ${personalMovieDB[key]}`);
        counter++;
    }
}

//better

console.log(Object.keys(personalMovieDB).length);

const personalPlanPeter = {
    name: "Peter",
    age: "29",
    skills: {
        languages: ['ru', 'eng'],
        programmingLangs: {
            js: '20%',
            php: '10%'
        },
        exp: '1 month'
    },
    showAgeAndLangs: function(plan) {
        const {age} = plan;
        const {languages} = plan.skills;
        let str = `Мне ${age} и я владею языками: `;

        languages.forEach(function(lang) {
            str += `${lang.toUpperCase()} `;
        });

        return str;
    }
};

personalPlanPeter.showAgeAndLangs(personalPlanPeter);

function showExperience(plan) {
    const {exp} = plan.skills;
    return exp;
}

showExperience(personalPlanPeter);

function showProgrammingLangs(plan) {
    let str = '';
    const {programmingLangs} = plan.skills;
    for (let key in programmingLangs) {
        str += `Язык ${key} изучен на ${programmingLangs[key]}\n`
    }

    return str;
}

showProgrammingLangs(personalPlanPeter);

const someString = 'This is some strange string';

function reverse(str) {
    let someRev = '';

    if(typeof(str) !== 'string') { 
        return "Ошибка!"
    }

    someRev =  [...str].reverse().join("");
    // someRev = str.split('').reverse().join('');
    // for (let i = str.length - 1; i >= 0; i--) {
    //     someRev += str[i];
    // }

    return someRev;
}

const result = reverse(someString);

console.log(result);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

function availableCurr(arr, missingCurr) {
    let str = 'Доступные валюты:\n';
    if(Array.isArray(arr) && arr.length === 0) {
        return 'Нет доступных валют';
    }

    for(let value of arr){
        if(value === missingCurr){
            value --;
        } else {
            str += `${value}\n`;            
        }
    }
    return str;
}

const allCurrencies = [...baseCurrencies, ...additionalCurrencies];

const a = availableCurr(allCurrencies, 'CNY');

console.log(a);