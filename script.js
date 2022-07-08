"use strict";

const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
};

let lastSawFilm = prompt('Один из последних просмотренных фильмов?', '');
let scoreFilm = prompt('На сколько оцените его?', '');
let lastSawFilm2 = prompt('Один из последних просмотренных фильмов?', '');
let scoreFilm2 = prompt('На сколько оцените его?', '');


personalMovieDB.movies[lastSawFilm] = scoreFilm;
personalMovieDB.movies[lastSawFilm2] = scoreFilm2;

console.log(personalMovieDB);