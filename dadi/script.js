// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

alert("Facciamo un gioco. Verrà scelto casualmente un numero tra 1 e 6 per te e per me. Chi ha il numero maggiore vince.");
var numeroGiocatore = Math.floor(Math.random() * 7);
alert("Il tuo numero è " + numeroGiocatore);

var numeroCpu = Math.floor(Math.random() * 7);
alert("Il mio numero invece è " + numeroCpu );

if ( numeroGiocatore > numeroCpu) {
 alert("Hai vinto!!");
} else if ( numeroGiocatore == numeroCpu){
 alert("Siamo pari!");
} else ( numeroGiocatore < numeroCpu) {
 alert(" Hai perso!");
}