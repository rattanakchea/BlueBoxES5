// jscs:disable
import {module} from './data';

var faker = module();
var DvdCollection = faker.getDvds(3);


// define data structure

var mockAPI = function (config) {
    var api = {},
        key = config.key;
    create();

    // setup localstorage
    function create(data) {
        if (!getData()) {
            if (data) {
                save(data);
            } else {
                //sample data
                save (DvdCollection);
            }
        } else {

            //override localstorage
            save (DvdCollection);
        }
    };

    function save(data) {
        localStorage.setItem(key, JSON.stringify(data));
    }

    function getData() {
        return JSON.parse(localStorage.getItem(key));
    }


    // API calls

    api.post = function (data) {
        var raw = getData();
        if (raw == null  || !raw) {
            raw = [];
        }

        //validation check?
        raw.push(data);
        save(raw);
        return raw;
    };

    api.reset = function () {
        localStorage.setItem(key, null);
    };


    api.get = function (id = null) {
        if (id) {
            return getADvd(id);
        }
        return new Promise(function (resolve, reject) {
            if (getData()) {
                resolve(getData());
            } else {
                reject({err: 'Error in Get'});
            }
        });
    };

    api.delete = function (id = null) {
        var allDvds = getData();
        return new Promise(function (resolve, reject) {

            if (!id) {
                reject({err: 'need to specify an id: ' + id});
            } else {
                id = parseInt(id);
                var theDvd = _.findWhere(allDvds, {id: id});

                if (theDvd) {
                    allDvds = _.without(allDvds, theDvd);
                    save(allDvds);
                    resolve(theDvd);  //return the removed dvd;
                } else {
                    reject({err: 'cannot find dvd to remove with id: ' + id});
                }
            }
        });
    };

    // get a single dvd by id
    function getADvd(id) {
        var id = parseInt(id),
            allDvds = getData();
        var theDvd = _.findWhere(allDvds, {id: id});
        return new Promise(function (resolve, reject) {
            theDvd ? resolve(theDvd) : reject({err: 'Dvd not found - id: ' + id});
        });
    }


    return api;

};

export {mockAPI}
