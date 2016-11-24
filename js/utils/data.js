
// Data Layer

// var defaultDvd = {
//     id: 0,
//     title: "Some title",
//     image: "https://api.dvdxpress.net/t/findingdory_rt2.jpg",
//     description: "Some movie description",
// };

function getDefaultDvd(id) {
    return {
        id: id,
        title: 'Ice Age: Collision',
        image: '//images.redbox.com/Images/EPC/boxartlarge/8421.jpg',
        description: 'Scrat’s epic pursuit of the elusive acorn cata'
    };
}

var dvds = [
    {
        id: 0,
        title: 'Ice Age: Collision Course',
        image: '//images.redbox.com/Images/EPC/boxartlarge/8421.jpg',
        description: 'Scrat’s epic pursuit of the elusive acorn catapults him into the universe where he' +
        'accidentally sets off a series of cosmic events that.'
    },
    {
        id: 1,
        title: 'The Legend of Tarzan',
        image: '//images.redbox.com/Images/EPC/boxartlarge/8177.jpg',
        description: 'Scark on a quest full of comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
    },
    {
        id: 2,
        title: 'X-Men: Apocalypse',
        image: '//images.redbox.com/Images/EPC/boxartlarge/8416.jpg',
        description: 'Scrark on a quest full of comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
    },
    {
        id: 3,
        title: 'Ice Age: Collision Course',
        image: '//images.redbox.com/Images/EPC/boxartlarge/8421.jpg',
        description: 'Scrat’s epict full of comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
    },
    {
        id: 4,
        title: 'The Legend of Tarzan',
        image: '//images.redbox.com/Images/EPC/boxartlarge/8177.jpg',
        description: 'Scrat’s of comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
    },
    {
        id: 5,
        title: 'X-Men: Apocalypse',
        image: '//images.redbox.com/Images/EPC/boxartlarge/8416.jpg',
        description: 'Scrat’s epic comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
    }
];

function createDvd(id, title, image, trailer, description='') {
    return {
        id: id,
        title: title,
        image: image,
        description: description,
        trailer: trailer
    };
}

function module() {
    return {
        getOneDvd: getDefaultDvd,
        getDvds: function() {
            return dvds;
        }
    };
};

export {module};
