import {View} from './view';

function dvdTemplate(title, image){

    return `<div class="col-xs-3">
                <div class="card">
                    <a href="#"><img class="card-img-top" src=${image} alt="movie title" style="width:200px"></a>
                </div>
                <div class="card-block">
                    <h5 class="card-title">${title}</h5>
                </div>
            </div>`;
}


export class DvdView extends View {

   constructor(){
       super('#dvdView', dvdTemplate('fixed title', 'https://api.dvdxpress.net/t/findingdory_rt2.jpg'));
   }

}