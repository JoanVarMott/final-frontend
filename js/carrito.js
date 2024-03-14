const carrito = document.getElementById("carrito");
const listaProductos = document.getElementById("lista-productos");
const contenedorCarrito = document.querySelector('.buy-car .lista-productos');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');


registrarEvensListeners()
function registrarEvensListeners(){
    //click en boton agregar a carrito
    listaProductos.addEventListener('click',agregarProducto())
}
function agregarProducto(){
    
}