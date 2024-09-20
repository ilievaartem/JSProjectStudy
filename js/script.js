"use strict"

let result = '';
const length = 7;

for (let i = 1; i < length; i++){

    for (let j = 0; j < i; j++){
        result += "*";
    }

    result += '\n';
}

console.log(result);

const lines = 5;
let resul = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        resul += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        resul += "*";
    }
    resul += "\n";
}

console.log(resul)

// first - мітка
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
    numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');

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
    private: false
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