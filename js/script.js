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

const numberOfFilms = +prompt('Скільки фільмів ви переглянули?', '');
console.log(numberOfFilms);

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    private: false
};

// a, b, c, d назва змінної, яка використовується один раз(технічна зміна)//
const a = prompt('Один з переглянутих останнії фільмів?', ''),
      b = +prompt('На скільки його оціните?', ''),
      c = prompt('Один з переглянутих останнії фільмів?', ''),
      d = +prompt('На скільки його оціните?', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);