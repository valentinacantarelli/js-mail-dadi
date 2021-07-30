// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var mailRegistrate = [" scrappy@email.com "," juno@email.com "," ruffley@email.com "," mittens@email.com "];

var mail = prompt("Ciao, inserisci la tua mail!");

for (var i = 0; i < mailRegistrate.length;i++){
    if (mail == mailRegistrate[i]){
        alert("La tua mail è valida");}
    
}
