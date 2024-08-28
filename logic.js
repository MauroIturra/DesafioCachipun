function CachipunVsComputador() {

    let jugadas = parseInt(prompt("Ingrese cuantas rondas quieres jugar?: "));
    let elecciones = ["tijera", "papel", "piedra"];
    let ganaste = 0;
    let perdiste = 0;
    let empate = 0;
    let i = 0;
    for( i ; i<jugadas; i++){
        let eleccionUsuario = prompt("Ingrese (piedra, papel o tijera): ");
        let eleccionComputador = elecciones[Math.floor(Math.random()*3)];
        alert("La computadora eligio:" + eleccionComputador);

        if (eleccionUsuario === eleccionComputador){
            alert("Empate");
            empate++;
        } else if (
            (eleccionUsuario === "piedra" && eleccionComputador === "tijera") || 
            (eleccionUsuario === "papel" && eleccionComputador === "piedra") ||
            (eleccionUsuario === "tijera" && eleccionComputador === "papel")
        ){
            alert("Ganaste");
            ganaste++;
        } else {
            alert("Perdiste")
            perdiste++;
        }
    }

    alert("Ganaste: " + ganaste);
    alert("Perdiste: " + perdiste);
    alert("Empate: " + empate);

    if(ganaste>perdiste){
        alert("Felicitaciones, ganaste el juego crack");
    } else if(ganaste<perdiste){
        alert("Lo siento, perdiste el juego");
    }else {
        alert("Empataron el juego");
    }

}

CachipunVsComputador();