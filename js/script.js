const menuCompleto = [
    { id: 1, name: "Cerveza", precio: 1900 },
    { id: 2, name: "Fernet", precio: 2100 },
    { id: 3, name: "Gaseosa", precio: 1000 },
    { id: 4, name: "Hamburguesa", precio: 4500 },
    { id: 5, name: "Pizza", precio: 4000 },
    { id: 6, name: "Papas Fritas", precio: 4500},
    { id: 7, name: "Sandwiches", precio: 5000 },
  ];

let confirmacion = false;

while (!confirmacion) {
    const numeroMesa = prompt("Bienvenido! Ingrese el número de su mesa.");

    if (isNaN(numeroMesa) || (numeroMesa.trim() == "") || (numeroMesa == null) || (numeroMesa == "0")) {
        alert("Debe ingresar un numero de mesa válido.");
        continue;
    }

    if (parseInt(numeroMesa) > 25) {
        alert("La mesa con número " + numeroMesa + " no existe.");
        continue;
    }

    confirmacion = confirm("El número de mesa asignado es " + numeroMesa + ". Es correcto?");

    if (confirmacion) {
        if (confirm("Gracias por confirmar la mesa. Desea ver la cartilla?")) {
            mostrarCarta();
            realizarPedido();
        } else {
            break;
        }
    }
}

function mostrarCarta() {
    console.log("=========== Bar Fons  ===========");

    for (let i = 0; i < menuCompleto.length; i++) {
        console.log(menuCompleto [i]);
    }
    console.log("=================================");
}

function realizarPedido() {
    const seleccionados = [];

    while (true) {
        const pedido = prompt("Ingrese el número del elemento que desea agregar a su pedido. Ingrese 0 para finalizar el pedido.");

        if (pedido == null) {
            confirmacion = false;
            break;
        }

        if (isNaN(pedido) || (pedido.trim() == "")) {
            console.log("Por favor, ingrese un número válido para realizar el pedido.");
            continue;
        }

        if (pedido == "0") {
            break;
        }

        const indiceSeleccion = parseInt(pedido);

        if (isNaN(indiceSeleccion) || indiceSeleccion < 1 || indiceSeleccion > menuCompleto.length) {
            console.log("Número de elemento no válido. Intente de nuevo.");
            continue;
        }

        const elemento = menuCompleto[indiceSeleccion - 1];
        seleccionados.push(elemento);
        console.log(`Pedido añadido: ${elemento.name}`);
    }

    console.log("Pedido finalizado. Elementos seleccionados:");
    console.log(seleccionados);

    elementosSeleccionados = seleccionados;

    if (seleccionados.length > 0) {
        const pedirCuenta = confirm("Quiere pedir la cuenta?");
        if (pedirCuenta) {
            calcularCuenta(elementosSeleccionados);
        } else {
            alert("Para luego pedir la cuenta debe solicitarsela al personal.");
        } 
        /*No supe como volver al bucle de la funcion realizarPedido, por ende finalizo con el alert.*/
    }
}

function calcularCuenta(elementos) {
    let total = 0;
    for (let i = 0; i < elementos.length; i++) {
        total += elementos[i].precio;
    }
    console.log(`Total de su cuenta: ${total} pesos.`);
}