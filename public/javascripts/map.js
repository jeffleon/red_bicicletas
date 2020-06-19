
var mymap = L.map('mapid').setView([4.652708, -74.087954], 13);

async function get_bicicles(){
    const response = await fetch('api/bicicletas')
    const json = await response.json()
    console.log(json)
    json.bicicleta.forEach(element => {
        L.marker(element.ubicacion, title=element.id).addTo(mymap)
    });
}

function create_map(){
    const attributionm = '&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>';
    const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
    const tiles = L.tileLayer(tileUrl,attributionm);
    tiles.addTo(mymap);
}

create_map()
get_bicicles()

