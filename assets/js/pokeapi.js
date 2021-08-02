// URL API
const API = "https://pokeapi.co/api/v2/pokemon?limit=20&offset=0";

//Obtener los resultados de la API
const getData = (api) => {
    return fetch(api) 
     .then((response)=> response.json())
     .then((json)=> {
        llenarDatos(json.results), paginacionNext(json.next), paginacionPrevious(json.previous);
     })
     .catch((error) =>{
         console.log("Error: ", error);
     })
};

// Dibujar caras de personajes
const llenarDatos = (data) => {
    let html = "";
    data.forEach((pj) => {
        html += '<div class="col mt-5">';
        html += '<div class="card" style="width: 10rem;">'
        html += '<div class="card-body">';
        html += `<h5 class="card-title">${pj.name}</h5>`;
        html += "</div>";
        html += "</div>";
        html += "</div>";
    });
    document.getElementById("datosPersonajes").innerHTML = html;
};
// Paginacion en 16 lineas
const paginacionPrevious = (data) => {
    let prevDisabled = "";
    let html = `<li class="page-item ${data== null ? (prevDisabled = "disabled") : (prevDisabled = "")}"><a class="page-link" onclick="getData('${data}')">Previous</a></li>`;
    document.getElementById("paginacionPrev").innerHTML=html;
};
const paginacionNext = (data) => {
    let nextDisabled = "";
   let html = `<li class="page-item ${data == null ? (nextDisabled = "disabled") : (nextDisabled = "")}"><a class="page-link" onclick="getData('${data}')">Next</a></li>`;

   document.getElementById("paginacionNext").innerHTML=html;
}
//Se ejecuta la API
getData(API);