TIMERS:


SETINTERVAL(): Se utiliza cuando queremos que nuestro codigo se ejecuta MUCHAS veces pasado un tiempo.
setInterval (fn, delay, param1(op), param2(op), ...);

Necesita de 2 atributos
1. Una función
2. La cantidad de segundos que quiero que pase para que el intervalo se ejecute nuevamente

var seg = 1;

startBtn.onclick = function () { //dentro del evento iniciamos el contador
	contador = setInterval (function(){
	container.innerText = seg; //Si lo mostramos en un contenedor se le pasa la informacion con el innerText
	seg++; //Aumentamos la variable en 1 cada 1000ms
}, 1000)
  console.log('se inicia un nuevo contador');
}


CLEARINTERVAL(): Pide el nombre de la variable que tiene almacenado el interval

stopBtn.onclick = function () {
  clearInterval(contador); //
  seg = 0;
  console.log('se detuvo el contador');
}



SETTIMEOU(): se utiliza cdo deseamos que el codigo se ejecute una sola vez pasada un tiempo establecido.

setTimeout(fn, delay, param1(op), param2(op), ...);

fn : callback que se invoca al dispararse el evento
delay: tiempo de espera para ejecutar el callback en milisegundos

Tambien se pueden pasar parametros:
setTimeout(saudos, 3000, "Hola");
function saludos(x) {
	console.log(x);
}
















