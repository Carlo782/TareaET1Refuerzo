const cars=require('./cars.json');
let aux=0;
const autoMayor2010=[];

for (let index = 0; index < cars.length; index++) {
        if (cars[index].year>2010) {
            aux++
            autoMayor2010.push(cars[index])
        }
}
console.log(aux);




//generarImprimirArrayStringMarcaModeloAnio(autoMayor2010)


function calcularCantadidaAutosColorRojo(){
    let aux=0;
    for (let index = 0; index < cars.length; index++) {
            if (cars[index].color==="Red") {
                aux++
            }
    }
    console.log(aux)
}

function generarImprimirArrayStringMarcaModeloAnio(arregloAuto2010){
   const autosOrdenados=[]

 arregloAuto2010.forEach(auto => {
    autosOrdenados.push(`${auto.brand} - ${auto.model} ${auto.}`)
 });

 console.log(autosOrdenados);
}