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

// for(let i = 0; i < 2; i++){
//     const a = prompt('Один з переглянутих останнії фільмів?', ''),
//             b = prompt('На скільки його оціните?', '');

//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//         personalMovieDB.movies[a] = b;
//     } else {
//         i--;
//     }
// }

// let i = 0;
// while(i < 2){
//     const a = prompt('Один з переглянутих останнії фільмів?', ''),
//           b = prompt('На скільки його оціните?', '');

//     if(a != null && b != null && a != '' && b != '' && a.length < 50){
//         i++;
//         personalMovieDB.movies[a] = b;
//         console.log('good')
//     } else {
//         console.log('bad')
//         i--;
//     }
// }

let i = 0;
do{
    const a = prompt('Один з переглянутих останнії фільмів?', ''),
          b = prompt('На скільки його оціните?', '');
    if(a != null && b != null && a != '' && b != '' && a.length < 50){
        i++;
        personalMovieDB.movies[a] = b;
        console.log('good')
    } else {
        console.log('bad')
        i--;
    }
}
while(i < 2);

if(personalMovieDB.count < 10){
    console.log('Переглянуто мало фільмів')
} else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
    console.log('Ви звичайний глядач');
} else if(personalMovieDB.count >= 30) {
    console.log('Ви кіноман');
} else {
    console.log('Відбулася помилка');
}

console.log(personalMovieDB);