import {View} from './view';
import {DvdView} from './dvd';

export class DvdListView extends View {

    constructor(DvdCollection) {
        super('#app', null);
        this.collection = DvdCollection;
        this.template = this.buildTemplate();
    }

    buildTemplate() {
        var html = '';
        this.collection.forEach(function(DvdModel) {
            let view = new DvdView(DvdModel);
            html += view.template;
        });
        return html;
    }

    // render(){
    //     this.el.innerHTML = this.template;
    // }

}
