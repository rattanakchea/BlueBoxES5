import {View} from './view';

// parameters deconstructor ES5
function dvdTemplate({title, image}){

    return `<div class="col-xs-3" style="display:inline-block; float:left; position: relative;">
                <div class="card">
                    <a href="#"><img class="card-img-top" src=${image} alt="movie title" style="width:200px"></a>
                </div>
                <div class="card-block">
                    <h5 class="card-title">${title}</h5>
                </div>
            </div>`;
}


export class DvdView extends View {

   constructor(DvdModel){
       super('#dvdView', dvdTemplate(DvdModel));
       this.model = DvdModel;
   }

}