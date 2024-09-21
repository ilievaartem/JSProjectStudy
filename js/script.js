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