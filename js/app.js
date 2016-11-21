/**
 * Created by rchea on 11/17/16.
 */

import {Dvd} from './models/dvd';
import {DvdView} from './views/dvd';
import {DvdListView} from './views/dvdList';

import {mockAPI} from './utils/mockAPI';

var api = mockAPI({key: 'blueBox2'});


// fetch data
api.get().then(function(data){

    runApp(data);

});


api.get(1).then(function(theDvd){
    console.log(theDvd);

}, function(err){
    console.og(err);
});


function runApp(DvdCollection){

    let dvdLisView = new DvdListView(DvdCollection);
    dvdLisView.render();

    let dvdView = new DvdView(DvdCollection[0]);
    dvdView.render();
}






