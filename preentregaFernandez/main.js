let pricemouse = 4500;
let pricecard = 120000;
let priceheadset= 8200;
let pricekeyboard = 11999;
let pricechair= 39999;




function itemsproducts() {
  let product = prompt("Cuantos articulos queres?", "");
  if (product != null){
    alert("Seleccionaste " + product + " articulos");
    let mensaje = confirm("¿Confirmar compra?");
    
    if (mensaje) {
    alert("¡Gracias por tu compra Mica, que tengas un lindo día!😊");
    }
    else {
    alert("Denegaste el mensaje, volvelo a intentar");
    }
  }
  else {
  alert("No ingresaste ningun articulo");
  }
}


function itemsproductmouse() {
  let product = prompt("Cuantos articulos queres?", "");
  if (product != null){
    alert("Seleccionaste " + product + " articulos");
    let mensaje = confirm("¿Confirmar compra?, tenes un total de $ " + product*pricemouse + ".");
    
    if (mensaje) {
    alert("¡Gracias por tu compra Mica, que tengas un lindo día!😊");
    }
    else {
    alert("Denegaste el mensaje, volvelo a intentar");
    }
  }
  else {
  alert("No ingresaste ningun articulo");
  }
}



function itemsproductcard() {
  let product = prompt("Cuantos articulos queres?", "");
  if (product != null){
    alert("Seleccionaste " + product + " articulos");
    let mensaje = confirm("¿Confirmar compra?, Precio final $ " + product*pricecard+ ".");
    
    if (mensaje) {
    alert("¡Gracias por tu compra Mica, que tengas un lindo día!😊");
    }
    else {
    alert("Denegaste el mensaje, volvelo a intentar");
    }
  }
  else {
  alert("No ingresaste ningun articulo");
  }
}

function itemsproductheadset() {
  let product = prompt("Cuantos articulos queres?", "");
  if (product != null){
    alert("Seleccionaste " + product + " articulos");
    let mensaje = confirm("¿Confirmar compra?, Precio final $ " + product*priceheadset+ ".");
    
    if (mensaje) {
    alert("¡Gracias por tu compra Mica, que tengas un lindo día!😊");
    }
    else {
    alert("Denegaste el mensaje, volvelo a intentar");
    }
  }
  else {
  alert("No ingresaste ningun articulo");
  }
}

function itemsproductkeyboard() {
  let product = prompt("Cuantos articulos queres?", "");
  if (product != null){
    alert("Seleccionaste " + product + " articulos");
    let mensaje = confirm("¿Confirmar compra? Precio final $ " + product*pricekeyboard+ ".");
    
    if (mensaje) {
    alert("¡Gracias por tu compra Mica, que tengas un lindo día!😊");
    }
    else {
    alert("Denegaste el mensaje, volvelo a intentar");
    }
  }
  else {
  alert("No ingresaste ningun articulo");
  }
}

function itemsproductchair() {
  let product = prompt("Cuantos articulos queres?", "");
  if (product != null){
    alert("Seleccionaste " + product + " articulos");
    let mensaje = confirm("¿Confirmar compra?, Precio final $ " + product*pricechair+ ".");
    
    if (mensaje) {
    alert("¡Gracias por tu compra Mica, que tengas un lindo día!😊");
    }
    else {
    alert("Denegaste el mensaje, volvelo a intentar");
    }
  }
  else {
  alert("No ingresaste ningun articulo");
  }
}