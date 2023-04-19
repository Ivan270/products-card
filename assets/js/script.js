function Producto(marca, modelo, precio, img) {
	this.brand = marca;
	this.model = modelo;
	this.price = precio;
	this.img = img;
}
let teclado1 = new Producto(
	'Logitech',
	'G915 TKL',
	174900,
	'https://media.solotodo.com/media/products/1185583_picture_1592642933.png'
);

let teclado2 = new Producto(
	'Steelseries',
	'Apex Pro Mini Wireless',
	283290,
	'https://media.solotodo.com/media/products/1623783_picture_1657640378.jpg'
);
let teclado3 = new Producto(
	'Corsair',
	'K63 Wireless',
	89000,
	'https://media.solotodo.com/media/products/831684_picture_1541125122.png'
);

let teclado4 = new Producto(
	'Redragon',
	'K605 Alien Big Size',
	195000,
	'https://media.solotodo.com/media/products/1678403_picture_1670410711.jpg'
);

let displayModelo = document.getElementById('productModel');
let displayMarca = document.getElementById('productBrand');
let displayPrecio = document.getElementById('productPrice');
let displayImage = document.getElementById('productImage');
let btnAlternativa = document.getElementById('btnAlternativa');

let mostrarProducto = (producto) => {
	displayModelo.innerHTML = producto.model;
	displayMarca.innerHTML = producto.brand;
	displayPrecio.innerHTML = producto.price.toLocaleString('es-CL', {
		style: 'currency',
		currency: 'CLP',
	});
	displayImage.setAttribute('src', producto.img);
};

let productos = [];
productos.push(teclado1);
productos.push(teclado2);
productos.push(teclado3);
productos.push(teclado4);

// Recorre array de productos, con cada click muestra un producto distinto dependiendo de su ubicacion en el array
let index = 0;
btnAlternativa.addEventListener('click', () => {
	if (index < productos.length) {
		mostrarProducto(productos[index]);
	} else {
		index = 0;
		mostrarProducto(productos[index]);
	}
	index++;
});
