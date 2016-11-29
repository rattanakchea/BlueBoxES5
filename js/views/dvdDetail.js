import {View} from './view';

// parameters deconstructor ES6
function template({ id, title, image, description }) {
    return `<div class="row">
                <div class="col-lg-12">
                    <h3 class="page-header">${title}</h3>
                </div>
            </div>
            <div class="row">
                <div class="col-md-8">
                    <img class="img-responsive" src=${image} alt="">
                </div>
                <div class="col-md-4">
                    <p>${description}</p>
                    <ul>
                        <li>Genre:</li>
                        <li>Actor: </li>
                        <li>Language:</li>
                    </ul>
                </div>
            </div>
            <!-- /.row -->
            <br/>
            <div class="row action">
                <div class="col-md-8">
                    <button class="btn btn-primary">Add to cart +</button>
                </div>
            </div>`;
}

export class DvdDetailView extends View {
    constructor(DvdModel) {
        super('#dvdView', template(DvdModel));
        this.model = DvdModel;
    }
}
