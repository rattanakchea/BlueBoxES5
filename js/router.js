import {DvdView} from './views/dvd';
import {mockAPI} from './utils/mockAPI';
var api = mockAPI({ key: 'blueBox2' });

// a hash to store our routes
var routes = {};

// The route registering function
function route(path, templateId, controller) {
    routes[path] = {
        templateId: templateId,
        controller: controller
    };
}


function HomeController() {
    console.log('at home');

    $('#detail').fadeOut();
    $('#home').fadeIn();
}

function DetailController(id) {
    console.log('at detail page of dvd: ', id);

    $('#home').fadeOut();

    // Dvd lookup
    api.get(id).then(function(dvd) {
        let dvdView = new DvdView(dvd).template;
        $('#detail').empty().append(dvdView).fadeIn();
    });

}

// Register routes

routes = {

    'home': {
        templateId: '#home',
        controller: HomeController
    },

    'detail/:id': {
        templateId: '#detail',
        controller: DetailController
    }

}


export function router() {
    var path = location.hash.slice(1) || '/';
    var dvdDetailRegex = new RegExp('detail\/\\d');

    var test = dvdDetailRegex.test(path);
    if (test) {
        // get the id - the second part after /
        var id = path.split('/')[1];

        var regex = /\/\d/;
        path = path.replace(regex, '/:id');

        // console.log('after replace: ', path);
        var route = routes[path];
        route.controller(id);

    } else {
        // homeController

        routes['home'].controller();

    }


}

window.addEventListener('hashchange', router);
