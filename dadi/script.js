// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// Stabilire il vincitore, in base a chi fa il punteggio più alto.

var numeroGiocatore = Math.floor(Math.random() * 5) + 1;
alert(numeroGiocatore + "Ecco il tuo numero");
console.log(numeroGiocatore)

var numeroCpu = Math.floor(Math.random() * 5) + 1;
alert(numeroCpu + "Questo invece è il numero del Computer");
console.log(numeroCpu)

// if (numeroGiocatore > numeroCpu) {
//     alert ("Hai vinto!!");
// }else if (numeroGiocatore == numeroCpu){
 //   alert("Siete pari!")
//}else (numeroGiocatore < numeroCpu) {
//     alert (" Hai perso!");
// }

if