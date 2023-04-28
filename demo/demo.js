const cars=require('./cars.json');
const autoMayor2010=[];

calcularYGuardarAutosMayores2010(autoMayor2010)

calcularCantadidaAutosColorRojo();

generarImprimirArrayStringMarcaModeloAnio(autoMayor2010)

AgregarLuxTaxYImprimir(cars)

mostrarCochesDeUnAño(cars,2011)

mostrarCochesDeUnAño(cars,2012)


function calcularYGuardarAutosMayores2010(arregloAutomayor2010){
    let aux=0;

    for (let index = 0; index < cars.length; index++) {
        if (cars[index].year>2010) {
            aux++
            arregloAutomayor2010.push(cars[index])
        }

}
console.log(aux)
}

function AgregarLuxTaxYImprimir(autitos){
    autitos.forEach(auto => {
        if (auto.brand === "Jaguar" || auto.brand === "Aston Martin"){
            auto.LuxuryTax=true;
        }
    });

    let luxuryTaxTrue= cars.filter(auto => auto.LuxuryTax===true)
    console.log(luxuryTaxTrue.length)
}

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
    autosOrdenados.push(`${auto.brand} - ${auto.model} ${auto.year}`)
 });

 console.log(autosOrdenados);
}

function mostrarCochesDeUnAño(autitos,anio){
    
    let autosDeUnAnioEspecifico = autitos.filter(auto => auto.year===anio)
    autosDeUnAnioEspecifico.forEach(autoGuardado => {
        console.log(`${autoGuardado.model} - ${autoGuardado.year}`)
    });
}


