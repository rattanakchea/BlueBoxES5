import {View} from './view';

// parameters deconstructor ES5
function dvdTemplate({title, image}) {

  return `<div class="col-xs-3" style="display:inline-block; float:left; position: relative;">
                <div class="card">
                    <a href="#"><img class="card-img-top" src=${image} alt="movie title" style="width:200px"></a>
                </div>
                <div class="card-block">
                    <h5 class="card-title">${title}</h5>
                </div>
            </div>`;
}

function template2({title, image}) {
  return `<div class="col-sm-4 col-lg-4 col-md-4">
                <div class="thumbnail">
                <img src=${image} alt="">
                <div class="caption">
                    <h4><a href="detail.html">${title}</a></h4>
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
