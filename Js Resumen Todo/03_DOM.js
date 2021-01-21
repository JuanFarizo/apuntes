DOM:
	¿Qué hace JS con DOM?
	Modificar elementos, atributos y estilos de página
	Borrar elementos y atributos
	Agregar nuevos elementos o atributos
	Reaccionar a todos los eventos HTML de la página
	Crear nuevos eventos HTML en la página.

---------------------------------------------------------

Objeto Window: Es lo primero que se carga en el navegador.

Objeto Document: representa le HTML, php o documento que sera cargado en el navegador. Se carga dentro de window. Tiene propiedades como title, url, cookie, etc.

---------------------------------------------------------

SELECTORES: Permite acceder a elementos de una pagina. Retorna un elemento o una lista.

document.querySelector('h1'); 
document.querySelector('.enlace');
document.querySelector('#nombreClase');
Recibe un string que indica el selector css del elemento del DOM que buscamos. Se puede combinar.

document.querySelector('ul.links'); Obtiene el ul con la clase 'links'

document.querySelectorAll('p'); 

document.querySelectorAll('ul.links li'); Obtiene todos los elementos li dentro de una etiqueta ul con clase 'links'

document.getElementById('titulo-principal'); Recibe un string con el nombre del id del elemento del DOM que buscamos.

---------------------------------------------------------

DOM Style: PERMITE CAMBIAR LAS PROPIEDADES DE UN ELEMENTO SEA QUE LAS TENGA O NO.

1) Obtenemos el elemento a traves de los metodos de arriba.
2) Aplicamos el metodo style.

var elH1 = document.getElementById('titulo-principal');

elH1.style.color = 'orange';
elemento.style.atributo
elH1.style.textAlign = 'center';

Las reglas de css que llevan guiones como font-style en JS se escribe con camelCase -> fontSize.

---------------------------------------------------------

SETTEAR ATRIBUTOS

1) Obtenemos el elemento a traves de los metodos de arriba.
2) Aplicamos el metodo:
						- setAttribute -> recibe 2 parametros: 1. El atributo 2. el valor a asignar
						- removeAttribute
						- getAttribute
						- hasAttribute -> devuelve true o false

elH1.setAttribute('class', 'danger');
var elEnlace = document.querySelector('.enlace');						
var url = elEnlace.getAttribute('href');						
						































