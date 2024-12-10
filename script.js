let chilometriViaggio = prompt (`Quanti chilometri devi fare?`);

let quantiAnniHai = prompt (`Quanti anni hai?`);

//FUNZIONI CALCOLO BIGLIETTI PER FASCE D'ETA'//

function sottraiPercentuale(chilometriViaggio, sconto) {
    return chilometriViaggio - (chilometriViaggio * sconto) / 100; 
}

//CONTROLLO ETA' E CHILOMETRI//

if (isNaN(quantiAnniHai) || isNaN(chilometriViaggio) || Number(chilometriViaggio)<=0) {
    console.log(`Inserisci un valore maggiore di 0`);
} else if (Number(quantiAnniHai)<=0 || Number(quantiAnniHai)>=110 ) {
    console.log(`Inserisci un'età compresa tra 1 a 109 anni`);

//COSTO BIGLIETTI UNDER 18//

} else if (Number(quantiAnniHai)<18) {
    let sconto = 20
    let prezzoMinorenni = sottraiPercentuale((chilometriViaggio * 0.21),sconto);
    let prezzoInEuro = `€${prezzoMinorenni.toFixed(2).replace(".",",")}`
    console.log(`Il tuo viaggio costa il 20% in meno`, prezzoInEuro);

//COSTO BIGLIETTI OVER 65//

} else if (Number(quantiAnniHai)>65) { 
    let sconto = 40;
    let prezzoOver = sottraiPercentuale((chilometriViaggio * 0.21),sconto);
    let prezzoInEuro = `€${prezzoOver.toFixed(2).replace(".",",")}`
    console.log(`Il tuo viaggio costa il 40% in meno`, prezzoInEuro);

//COSTO BIGLIETTI NORMALI//
    
} else {
    quantiAnniHai = Number(quantiAnniHai)
    let prezzoNormale = Number(chilometriViaggio)*0.21
    let prezzoInEuro = `€${prezzoNormale.toFixed(2).replace(".",",")}`
    console.log(`Il tuo viaggio costa`, prezzoInEuro);
}