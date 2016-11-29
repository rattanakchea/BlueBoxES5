import {View} from './view';
import {DvdView} from './dvd';

function template({ image }) {
    return `<img src=${image} alt="" style="width:100px; padding: 10px; border: 1px solid #3c3c3c;">`;
}
export class CartView extends View {

    constructor(DvdCollection) {
        super('#cart', null);
        this.collection = DvdCollection;
        this.template = this.buildTemplate();
    }

    buildTemplate() {
        var html = '';
        this.collection.forEach(function(DvdModel) {
            let view = new DvdView(DvdModel, template);
            html += view.template;
        });
        return html;
    }

    add(dvdModel) {
        this.collection.push(dvdModel);
    }

}
