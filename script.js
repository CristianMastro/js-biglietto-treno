let chilometriViaggio = prompt (`Quanti chilometri devi fare?`);

let quantiAnniHai = prompt (`Quanti anni hai?`);

//FUNZIONI CALCOLO BIGLIETTI PER FASCE D'ETA'//

function sottraiPercentuale(chilometriViaggio, scontoMinorenni) {
    return chilometriViaggio - (chilometriViaggio * scontoMinorenni) / 100; 
}

function sottraiPercentualeOver(chilometriViaggio, scontoOver) {
    return chilometriViaggio - (chilometriViaggio * scontoOver) / 100; 
}   



//CONTROLLO ETA' E CHILOMETRI//

if (isNaN(quantiAnniHai) || isNaN(chilometriViaggio) || Number(chilometriViaggio)<=0) {
    console.log(`Inserisci un valore maggiore di 0`);
} else if (Number(quantiAnniHai)<=0 || Number(quantiAnniHai)>=110 ) {
    console.log(`Inserisci un'età compresa tra 1 a 109 anni`);

//COSTO BIGLIETTI UNDER 18//

} else if (Number(quantiAnniHai)<18) {
    const scontoMinorenni = 20;
    let prezzoMinorenni = sottraiPercentuale((chilometriViaggio * 0.21),scontoMinorenni);
    let prezzoInEuro = `€${prezzoMinorenni.toFixed(2).replace(".",",")}`
    console.log(`Il tuo viaggio costa il 20% in meno`, prezzoInEuro);

//COSTO BIGLIETTI OVER 65//

} else if (Number(quantiAnniHai)>65) { 
    const scontoOver = 40;
    let prezzoOver = sottraiPercentualeOver((chilometriViaggio * 0.21),scontoOver);
    let prezzoInEuro = `€${prezzoOver.toFixed(2).replace(".",",")}`
    console.log(`Il tuo viaggio costa il 40% in meno`, prezzoInEuro);

//COSTO BIGLIETTI NORMALI//
    
} else {
    quantiAnniHai = Number(quantiAnniHai)
    let prezzoNormale = Number(chilometriViaggio)*0.21
    let prezzoInEuro = `€${prezzoNormale.toFixed(2).replace(".",",")}`
    console.log(`Il tuo viaggio costa`, prezzoInEuro);
}