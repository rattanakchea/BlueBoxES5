import {View} from './view';

// parameters deconstructor ES6
function template2({ id, title, image }) {
    return `<div class="col-sm-4 col-lg-4 col-md-4">
                <div class="thumbnail">
                <a href="#${id}"><img src=${image} alt=""></a>
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
    constructor(DvdModel) {
        super('#dvdView', template2(DvdModel));
        this.model = DvdModel;
    }
}
