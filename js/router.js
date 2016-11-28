import {DvdView} from "./views/dvd";
import {DvdDetailView} from "./views/dvdDetail";
import {mockAPI} from "./utils/mockAPI";
var api = mockAPI( { key: "blueBox2" } );

// A hash to store our routes
var routes = {};

// The route registering function
function route( path, templateId, controller ) {
    routes[ path ] = {
        templateId: templateId,
        controller: controller
    };
}

function HomeController() {
    console.log( "at home" );

    $( "#detail" ).hide();
    $( "#home" ).fadeIn();
}

function DetailController( id ) {
    // Dvd lookup
    api.get( id ).then( function( dvd ) {
        let dvdView = new DvdDetailView( dvd ).template;
        $( "#home" ).hide();
        $( "#detail" ).empty().append( dvdView ).fadeIn();
    } );

}

// Register routes
routes = {

    "home": {
        templateId: "#home",
        controller: HomeController
    },

    "detail/:id": {
        templateId: "#detail",
        controller: DetailController
    }
};

export function router() {
    var path = location.hash.slice( 1 ) || "/";
    var dvdDetailRegex = new RegExp( "detail\/\\d" );

    var test = dvdDetailRegex.test( path );
    if ( test ) {

        // Get the id - the second part after /
        var id = path.split( "/" )[ 1 ];

        var regex = /\/\d/;
        path = path.replace( regex, "/:id" );

        // Console.log('after replace: ', path);
        var route = routes[ path ];
        route.controller( id );

    } else {
        // HomeController

        routes[ "home" ].controller();

    }

}

window.addEventListener( "hashchange", router );
