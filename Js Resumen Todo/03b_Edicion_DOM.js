Edicion DOM

var nuevoLi = document.createElement('li'); Recibe como parametro la etiqueta de HTML.

var textoDelLi = document.createTextNode('un texto que va dentro de un li');

nuevoLi.appendChild(textoDelLi); 
Elemento.append(nodoDeTexto);
Inserta el texto entre las etiquetas del li

Para insertar un elemento dentro de otro elemento:
1) Capturamos el elemento al que le vamos a insertar:
var lista = document.querySelector('ul');
2) Insertamos un elemento creado:
lista.append(nuevoLi); 


RemoveChild() nos permite eliminar un hijop dentro de un elemento previamente capturado. Recibe como parametro el nodo que vamos a eliminar

var lista = document.querySelector('ul');

var nodosHijos = lista.children;
var nodoABorrar = nodosHijos[2];

lista.removeChild(nodoABorrar);

---------------------------------------------------------

Manipular atributo class permite generar cambios visuales (Tiene ventajas sobre setAttribute ya que no ahorra pasos):

Elemento.objeto.método(nombreDeLaClase);

1) Capturamos el elemento.
2) Aplicamos el metodo del objeto classList:
						classList.add()
						classList.remove()
						classList.toggle(): si existe la clase la elimina sino existe la crea
						classList.contains(): devuelve true o false la clase consultada
						
var lista = document.querySelector('ul');
lista.classList.add('nueva-clase');	