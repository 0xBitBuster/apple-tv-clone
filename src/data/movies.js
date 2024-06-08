export const movies = [
    { poster: "/img/posters/airplane.webp", name: "Airplane" },
    {
        poster: "/img/posters/family-man.webp",
        name: "Family man",
    },
    {
        poster: "/img/posters/laboratory.webp",
        name: "Laboratory",
    },
    { poster: "/img/posters/napoleon.webp", name: "Napoleon" },
    {
        poster: "/img/posters/person-in-darkness.webp",
        name: "Person in Darkness",
    },
    {
        poster: "/img/posters/scary-building.webp",
        name: "Scary Building",
    },
    { poster: "/img/posters/stars.webp", name: "Stars" },
];

export const randomMoviesSet1 = movies
    .sort(() => Math.random() - 0.5)
    .concat(movies.sort(() => Math.random() - 0.5))
    .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSet2 = movies
    .sort(() => Math.random() - 0.5)
    .concat(movies.sort(() => Math.random() - 0.5))
    .concat(movies.sort(() => Math.random() - 0.5))
    .sort(() => Math.random() - 0.5);
