Evento: Algo que pasa en el navegador o que es ejecutado por el usuario.

Estructura basica:
	element.onNameEvent = function() {
		//lo que sucede al disparar el evento
	}

Eventos mas comunes:
					onlick			onkeydown
					ondbclock		onload
					onmouseover		onfocus
					onmouseout		onblur
					onscroll		onchange
					onmousemove		onsubmit


ONLOAD: se recomienda ejecutar sobre window. Permite que todo el script se ejecute cuando se haya cargado por completo el objeto document dentro del objeto window.

window.onload = function () {
	var h3 = document.querySelector('h3');
	console.log(h3);
	// EN GENERAL SE PONE AQUI ADENTRO TODO EL SCRIPT DE JS
}

ONMOUSEOVER: evento que ocurre al pasar el mouse por el elemento
ONMOUSEOUT: evento que ocurre al quitar el mouse por un elemento
ONMOUSEMOVE: recibe cada vez que muevo el cursor. DONDE? Se le pasa a la función como parámetro.
	unDiv.onmousemove = function (evento) {
		console.log('x:' + evento.clientX);
		console.log('y:' + evento.clientY);
	}
	
---------------------------------------------------------

PARA EVITAR QUE SE DISPAREN EVENTOS POR DEFECTO:
	preventDefault();
Como se utiliza:
	1) Capturamos el evento que viene por defecto. En el ejemplo el href. Se usa el event
	2) Ejecutamos sobre el event el preventDefault();
	
	var btn = document.querySelector('a');
	
	btn.onclick = function (event) {
		alert('Clickeaste en el link');
		event.preventDefault(); //no continua con el proximo evento (redireccionar en este caso)
	}
	
	
	












