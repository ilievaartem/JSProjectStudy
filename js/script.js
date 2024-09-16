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

personalMovieDB[movies[a] = b];
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);