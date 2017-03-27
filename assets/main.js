// muestra el texto que se ingresa en el textarea, dentro de un div
function mostrarTexto(){
  var texto = document.getElementById("textoEscrito").value;
  document.getElementById("previewTexto").innerHTML = texto;
}

// color en tipografia
function elegirColorTipografia() {
  var cadenaDeTexto = document.getElementById("textoEscrito").value;
  var colorIngresado = prompt("Color de tipografìa en hexadecimal (ejemplo: #1E737F)");
  var colorEnTexto = cadenaDeTexto.fontcolor(colorIngresado);

  document.getElementById("previewTexto").innerHTML = colorEnTexto;
}
// color fondo div
function elegirColorFondo() {
  document.getElementById("previewTexto").style.backgroundColor = prompt("Color de fondo en hexadecimal (ejemplo: #c54f4f)");

}

// ALINEAR EL texto

function alinearTexto(align) {
  switch (align){
    case 1:
      document.getElementById("previewTexto").style.textAlign = "left";
      break;
    case 2:
      document.getElementById("previewTexto").style.textAlign = "center";
      break;
    case 3:
      document.getElementById("previewTexto").style.textAlign = "right";
      break;

  }
}

// cambiar a chico, mediano, grande el tamaño de la tipografia
function cambiarPuntajeTipografia(pts) {
  switch (pts){
    case 1:
      document.getElementById("previewTexto").style.fontSize = "65px";
      break;
    case 2:
      document.getElementById("previewTexto").style.fontSize = "35px";
      break;
    case 3:
      document.getElementById("previewTexto").style.fontSize = "20px";
      break;

  }
}

function agregarComentarioEnLista(){
  var comentario = document.createElement("li");
  var comentarioParaAgregar = document.getElementsByTagName("previewTexto").value;
  var lineaHorizontal = document.getElementById("lineaHorizonte");
  comentario.innerHTML += comentarioParaAgregar.style += lineaHorizontal;

  document.getElementById("listaDeComentarios").appendChild(comentario);
}

function comentariosAlHistorial(){

	var comentarioAgregado = document.getElementById("previewTexto").cloneNode(true);
  comentarioAgregado.removeAttribute("id");
	var newCommit = document.getElementById("comentariosListados");
	listaComentarios.insertBefore(comentarioAgregado, listaComentarios.firstChild);
	var lineaHorizontal = document.createElement("hr");
	listaComentarios.insertBefore(lineaHorizontal, listaComentarios.firstChild);
	document.getElementById("listaComentarios").value = "";

	}
