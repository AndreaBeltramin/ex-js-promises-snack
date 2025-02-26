// Snack 2
// Crea la funzione lanciaDado() che restituisce una Promise che, dopo 3 secondi,
// genera un numero casuale tra 1 e 6. Tuttavia, nel 20% dei casi, il dado si "incastra" e la Promise va in reject.

function lanciaDado() {
	return new Promise((resolve, reject) => {
		console.log("lancio del dado...");
		setTimeout(() => {
			if (Math.random() < 0.2) {
				reject("dado incastrato...riprova");
			} else {
				const risultato = Math.floor(Math.random() * 6) + 1;
				resolve(risultato);
			}
		}, 3000);
	});
}

lanciaDado()
	.then((risultato) => console.log("numero : ", risultato))
	.catch((err) => console.error(err));

// Bonus: HOF con closure per memorizzare l'ultimo lancio
// Modifica la funzione in creaLanciaDado(), che restituisce una closure che memorizza
// l'ultimo risultato. Se il numero esce due volte di fila, stampa "Incredibile!".
