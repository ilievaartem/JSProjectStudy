"use strict"

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    private: false,
    start: () => {
        personalMovieDB.count = +prompt('Скільки фільмів ви переглянули?', '').trim();
    
        while (personalMovieDB.count == null || personalMovieDB.count == '' || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Скільки фільмів ви переглянули?', '');
        }
    },
    rememberMyFilm: function() {
        for(let i = 0; i < 2; i++){
            const a = prompt('Один з переглянутих останнії фільмів?', ''),
                  b = prompt('На скільки його оціните?', '');
        
            if(a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
            } else {
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10){
            console.log('Переглянуто мало фільмів')
        } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Ви звичайний глядач');
        } else if(personalMovieDB.count >= 30) {
            console.log('Ви кіноман');
        } else {
            console.log('Відбулася помилка');
        }
    },
    showMyDB: function(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if(personalMovieDB.private) {
            personalMovieDB.private = false
        } else {
            personalMovieDB.private = true
        }
    },
    writeYourGenres: function() {
        // for(let i = 1; i <= 3; i++){
            // let genre = prompt(`Ваш улюблений жанр під номером${i}`);

            // if(genre === '' || genre == null){
            //     console.log("Ви ввели дані не коректно або взагалі їх не ввели");
            //     i--;
            // } else {
            //     personalMovieDB.genres[i - 1] = genre;
            // }
        // }

        for(let i = 1; i < 2; i++){
        let genres = prompt(`Уведіть ваші улюблені жанри через кому`).toLocaleLowerCase();

            if(genres === '' || genres == null){
                console.log("Ви ввели дані не коректно або взагалі їх не ввели");
                i--;
            } else {
                personalMovieDB.genres = genres.split(', ');
                personalMovieDB.genres.sort();
            }
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Улюблений жанр ${i + 1} - це ${item}`);
        })
    }
};