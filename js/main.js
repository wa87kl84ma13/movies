const movies = [
    {
        title: 'Avengers: Infinity War',
        img: 'img/avengers.jpg',
        release: 2018
    },

    {
        title: 'Incredibles 2',
        img: 'img/incredibles.jpg',
        release: 2018
    },

    {
        title: 'Spider-Man: Into the Spider-Verse',
        img: 'img/spiderman.jpg',
        release: 2018
    },

    {
        title: 'Black Panther',
        img: 'img/black-panther.jpg',
        release: 2018
    }
];

const movieItems = document.querySelector('#all-movies');

function showMovies() {
    movies.forEach(function(movie){
        movieItems.innerHTML += `<div class="movies-list">
                                <img src="${movie.img}" alt="${movie.title}">
                                <h4>${movie.title}</h4>
                                </div>`;
    });
}

showMovies();
/*
                                '<div class="movies-list">'
                                + '<img src="' + movie.img + '" alt="' + movie.title + '">'
                                + '<h4>' + movie.title + '</h4>'
                                + '<p>' + movie.release + '</p>'
                                + '</div>';*/



// Show and hide content
const tabItems = document.querySelectorAll('.tab-item');
const tabContent = document.querySelectorAll('.tab-content');


function selectItem(e) {
    removeBackground();
    removeShow();
    // Add background to current tab
    this.classList.add('selected');

    const tabContentItem = document.querySelector(`#${this.id}-content`);

    tabContentItem.classList.add('show');
}

// Remove background from other tabs
function removeBackground() {
    tabItems.forEach(item => item.classList.remove('selected'));
}

function removeShow() {
    tabContent.forEach(item => item.classList.remove('show'));
}

// Listen for click
tabItems.forEach(item => item.addEventListener('click', selectItem));