let chilometriViaggio = prompt (`Quanti chilometri devi fare?`);

let quantiAnniHai = prompt (`Quanti anni hai?`);

//CONTROLLO ETA' E CHILOMETRI//

if (isNaN(quantiAnniHai) || isNaN(chilometriViaggio)) {
    console.log(`Inserisci un valore maggiore di 0`);
} else if (Number(quantiAnniHai)<=0 || Number(chilometriViaggio)<=0) {
    console.log(`Inserisci un valore maggiore di 0`);

    //FUNZIONE PER CALCOLO BIGLIETTI MINORENNI//
} else if (Number(quantiAnniHai)<18) {
    function sottraiPercentuale(chilometriViaggio, scontoMinorenni) {
       return chilometriViaggio - (chilometriViaggio * scontoMinorenni) / 100; 
    }
        let scontoMinorenni = 20;
        let prezzoMinorenni = sottraiPercentuale((chilometriViaggio * 0.21),scontoMinorenni);
        console.log(`Il tuo viaggio costa il 20% in meno`, prezzoMinorenni);
    //FUNZIONE PER CALCOLO BIGLIETTI OVER 65// 
} else if (Number(quantiAnniHai)>65) {
    function sottraiPercentualeOver(chilometriViaggio, scontoOver) {
       return chilometriViaggio - (chilometriViaggio * scontoOver) / 100; 
    }
        let scontoOver = 40;
        let prezzoOver = sottraiPercentualeOver((chilometriViaggio * 0.21),scontoOver);
        console.log(`Il tuo viaggio costa il 40% in meno`, prezzoOver);
} else {
    quantiAnniHai = Number(quantiAnniHai)
    console.log(`Il tuo viaggio costa`, Number(chilometriViaggio)*0.21);
}