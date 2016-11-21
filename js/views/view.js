//var _ = require('../../bower_components/underscore/underscore');

export class View {

    constructor(selector, template){
        this.el = document.querySelector(selector);
        this.template = template;
    }

    render(){
        this.el.innerHTML = this.template;
    }

}