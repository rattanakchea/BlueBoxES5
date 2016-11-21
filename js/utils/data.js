
// Data Layer

// var defaultDvd = {
//     id: 0,
//     title: "Some title",
//     image: "https://api.dvdxpress.net/t/findingdory_rt2.jpg",
//     description: "Some movie description",
// };

function getDefaultDvd(id){
    return {
        id: id,
        title: "Some title",
        image: "https://api.dvdxpress.net/t/findingdory_rt2.jpg",
        description: "Some movie description",
    };
}

function module(){

    var id = 0; //static id, closure
    var getOneDvd = getDefaultDvd;

    var getDvds = function(count){
        var arr = [];
        while(count-- > 0){
            arr.push(getDefaultDvd(id++));
        }

        return arr;
    };

    return {
        getOneDvd: getOneDvd,
        getDvds: getDvds
    }
};

export {module}