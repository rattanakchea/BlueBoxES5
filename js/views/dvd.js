import {View} from './view';

// parameters deconstructor ES6
function defaultTemplate({ id, title, image }) {
    return `<div class="col-sm-4 col-lg-4 col-md-4">
                <div class="thumbnail">
                    <a href="#detail/${id}"><img src=${image} alt=""></a>
                    <div class="caption">
                        <h4><a href="#${id}">${title}</a></h4>
                    </div>
                    <div class="ratings">
                        <p class="pull-right"><a href="#">Add to cart</a></p>
                        <p>
                        <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                            <span class="glyphicon glyphicon-star"></span>
                        </p>
                    </div>
                </div>
            </div>`;
}

export class DvdView extends View {
    constructor(DvdModel, template) {
        super();
        var template = template || defaultTemplate;

        this.el = '#dvdView';
        this.template = template(DvdModel);
        this.model = DvdModel;
    }
}
