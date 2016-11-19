
//var _ = require('../../bower_components/underscore/underscore');

export class Dvd {

    constructor(title, image, description){
        this.title = title;
        this.image = image;
        this.description = description;
    }

    toString(){
    //template string use back tick
        return `${this.title} ${this.description}`;
    }

}