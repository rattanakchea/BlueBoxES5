/**
 * Created by rchea on 11/17/16.
 */

import {Dvd} from './models/dvd';

import {DvdView} from './views/dvd';
import {DvdListView} from './views/dvdList';

import {module} from './utils/data';

var app = 'my app is cool';

let dvd = new Dvd('some title', 'image location', 'description');


var faker = module();
var DvdCollection = faker.getDvds(5);

let dvdLisView = new DvdListView(DvdCollection);
dvdLisView.render();


let dvdView = new DvdView(DvdCollection[0]);
dvdView.render();

console.log('dvdView: ', dvdView);

console.log(dvd);