Ejemplo presentar una lista de articulos en HTML a partir de una array en PHP

<?php 
$productos = [
	0 => [
	"imagen" => "img/img-phone-01.jpg",
	"nombre" => "Nombre del Producto 1",
	"descripcion" => "Lorem Ipsum",
	"precio" => 5,
	"estaEnOferta" => true
	],
	
	1 => [
		"imagen" => "img/img-phone-02.jpg",
		"nombre" => "Nombre del Producto 2",    
	"descripcion" => "Lorem Ipsum",	
	"precio" => 6,
	"estaEnOferta" => false
	],
	
	2 => [
		"imagen" => "img/img-phone-03.jpg",
		"nombre" => "Nombre del Producto 3",   
		"descripcion" => "Lorem Ipsum",
	"precio" => 7,
	"estaEnOferta" => true
	],
	
	3 => [
		"imagen" => "img/img-phone-01.jpg",
		"nombre" => "Nombre del Producto 4",    
		"descripcion" => "Lorem Ipsum",
		"precio" => 8,
		"estaEnOferta" => false
	],
	4 => [
		"imagen" => "img/img-phone-02.jpg",
		"nombre" => "Nombre del Producto 5",    
		"descripcion" => "Lorem Ipsum",
		"precio" => 9,
		"estaEnOferta" => true
	],
	5 => [
		"imagen" => "img/img-phone-03.jpg",
		"nombre" => "Nombre del Producto 6",   
		"descripcion" => "Lorem Ipsum",
		"precio" => 10,
		"estaEnOferta" => false
	]
	];
	?>
	
<?php foreach ($productos as $producto) : ?>
<!-- // echo "<pre>" ; print_r($producto); exit; -->
<article class="producto">
	<img class="main-photo" src="<?=$producto['imagen']?>" alt="">
	<h2 class="name"><?=$producto['nombre']?></h2>
	<p><?=descripcionLarga($producto)?></p>
	<a class="more" href="#">ver más</a>
</article>
                    
<?php endforeach;  ?>












