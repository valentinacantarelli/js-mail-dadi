// Chiedi all’utente la sua email,
// controlla che sia nella lista di chi può accedere,
// stampa un messaggio appropriato sull’esito del controllo.

var mailRegistrate = ["scrappy@email.com","juno@email.com","ruffley@email.com","mittens@email.com"];

var mail = prompt("Ciao, inserisci la tua mail!");

var verifica = false;

for (var i = 0; i < mailRegistrate.length; i++){
    if (mail == mailRegistrate[i]){
        verifica = true;
    }
}

if (verifica == true ){
    alert("Sei registrato!");
} else{
    alert("Non sei registrato!");
}