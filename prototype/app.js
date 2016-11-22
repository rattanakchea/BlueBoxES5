// could use an movie db api

var dvds = [
    {
        title: 'Ice Age: Collision Course',
        image: '//images.redbox.com/Images/EPC/boxartlarge/8421.jpg',
        description: 'Scrat’s epic pursuit of the elusive acorn catapults him into the universe where he accidentally sets off a series of cosmic events that transform and threaten the Ice Age World. To save themselves, Sid, Manny, Diego, and the rest of the herd must leave their home and embark on a quest full of comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
    },
    {
        title: 'The Legend of Tarzan',
        image: '//images.redbox.com/Images/EPC/boxartlarge/8177.jpg',
        description: 'Scrat’s epic pursuit of the elusive acorn catapults him into the universe where he accidentally sets off a series of cosmic events that transform and threaten the Ice Age World. To save themselves, Sid, Manny, Diego, and the rest of the herd must leave their home and embark on a quest full of comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
    },
    {
        title: 'X-Men: Apocalypse',
        image: '//images.redbox.com/Images/EPC/boxartlarge/8416.jpg',
        description: 'Scrat’s epic pursuit of the elusive acorn catapults him into the universe where he accidentally sets off a series of cosmic events that transform and threaten the Ice Age World. To save themselves, Sid, Manny, Diego, and the rest of the herd must leave their home and embark on a quest full of comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
    },
    {
        title: 'Ice Age: Collision Course',
        image: '//images.redbox.com/Images/EPC/boxartlarge/8421.jpg',
        description: 'Scrat’s epic pursuit of the elusive acorn catapults him into the universe where he accidentally sets off a series of cosmic events that transform and threaten the Ice Age World. To save themselves, Sid, Manny, Diego, and the rest of the herd must leave their home and embark on a quest full of comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
    },
    {
        title: 'The Legend of Tarzan',
        image: '//images.redbox.com/Images/EPC/boxartlarge/8177.jpg',
        description: 'Scrat’s epic pursuit of the elusive acorn catapults him into the universe where he accidentally sets off a series of cosmic events that transform and threaten the Ice Age World. To save themselves, Sid, Manny, Diego, and the rest of the herd must leave their home and embark on a quest full of comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
    },
    {
        title: 'X-Men: Apocalypse',
        image: '//images.redbox.com/Images/EPC/boxartlarge/8416.jpg',
        description: 'Scrat’s epic pursuit of the elusive acorn catapults him into the universe where he accidentally sets off a series of cosmic events that transform and threaten the Ice Age World. To save themselves, Sid, Manny, Diego, and the rest of the herd must leave their home and embark on a quest full of comedy and adventure, traveling to exotic new lands and encountering a host of colorful new characters.'
    }
];

var template = $('#dvdTemplate').html();

var html = _.template(template, {dvds: dvds});

$('#dvdList').html(html);