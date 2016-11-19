/**
 * Created by rchea on 11/17/16.
 */

import {Dvd} from './models/dvd';

import {DvdView} from './views/dvd';

var app = 'my app is cool';

let dvd = new Dvd('some title', 'image location', 'description');


let dvdView = new DvdView();
dvdView.render();

console.log('dvdView: ', dvdView);

console.log(dvd);
