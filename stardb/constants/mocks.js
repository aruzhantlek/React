const categories = [
    {
        id: 'starships',
        name: 'Starships',
        tags: ['products', 'inspirations'],
        count: 5,
        image: require('../assets/images/starships.png')
    },
    {
        id: 'planets',
        name: 'Planets',
        tags: ['products', 'inspirations'],
        count: 5,
        image: require('../assets/images/planets.png')
    }
];
const products = [
    {
        id:1,
        name: 'Star Wars: 25 Best Spaceships',
        description: 'What would Star Wars be without the many cool space ships that populate its universe? From starfighters to military cruisers and worn hunks of junk that separate Star Wars from the chrome aesthetic of countless other sci-fi stories, this vast armada is a true marvel of cinema and the science fiction genre.',
        tags: ['Interior', '27 m²', 'Ideas'],
        images: [
            require('../assets/images/x-wing.png'),
            require('../assets/images/millennium-falcon.png'),
            require('../assets/images/tie-fighter.png'),
        ]
    }
];
const explore = [
    require('../assets/images/star.png'),
    require('../assets/images/jedi-starfighter.png'),
    require('../assets/images/kylo-ren-shuttle.png'),
];
const profile ={
    username: 'Aruzhan',
    location: 'Europe',
    email: 'tlekovaaru@ganil.com',
    avatar: require('../assets/images/avatar.png'),
    budget: 1000,
    monthly_cap: 5000,
    notifications: true,
    newsletter: false,
};
export{
    categories,
    explore,
    products,
    profile,

}