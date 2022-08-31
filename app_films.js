'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function() {
        for (let i =0; i < 2; i++) {
            const lastSawFilm = prompt('Один из последних просмотренных фильмов?', '').trim();
            const scoreFilm = prompt('На сколько оцените его?', '');

        if (lastSawFilm != null && scoreFilm != null && lastSawFilm != '' && scoreFilm != '' && lastSawFilm.length < 50) {
            personalMovieDB.movies[lastSawFilm] = scoreFilm;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
        }
    },
    detectPersonalLevel: function() {
        if (personalMovieDB.count < 10) {
        console.log("Просмотрено довольно мало фильмов");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("Вы классический зритель");
    } else if (personalMovieDB.count >= 30) {
        console.log("Вы киноман");
    } else {
        console.log("Произошла ошибка");
    }
    },
    showMyDB: function(hidden) {
        if (!hidden) {
            console.log(personalMovieDB);
        }
    }, 
    toggleVisibleMyDB() {
        if (personalMovieDB) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function() {
            for (let i = 1; i <= 3; i++) {
                let genre = prompt(`Ваш любимый жанр под номером ${i}`);
                
            if (genre === null || genre === '' || isNaN(genre)){
                console.log('Error');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;
                }
            }
        
        personalMovieDB.genres.forEach((item, i) => {
           console.log(`Любимый жанр ${i + 1} - это ${item}`);
        });
    },
};
