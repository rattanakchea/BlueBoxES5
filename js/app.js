/**
 * Created by rchea on 11/17/16.
 */






import {Router} from './router';

import {DvdListView} from './views/dvdList';

import {mockAPI} from './utils/mockAPI';

var api = mockAPI({ key: 'blueBox2' });

// Fetch data
api.get().then(function(data) {
    runApp(data);
});

api.get(1).then(function(theDvd) {
    console.log(theDvd);
}, function(err) {
    console.log(err);
});

function runApp(DvdCollection) {
    let dvdListView = new DvdListView(DvdCollection);
    dvdListView.render();
}