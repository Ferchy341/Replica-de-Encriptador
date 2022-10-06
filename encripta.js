var inputTexto = document.querySelector(".ingreseTexto");
var mensaje = document.querySelector(".textoIngresado");
var desaparecer = document.querySelector(".imagenes");
var botonCopiar = document.querySelector("#botoncopiar");



document.getElementById("texto-boton").style.display = "none";

function btnencriptar(){
    var textoEncriptado = encriptar(inputTexto.value);
    mensaje.value = textoEncriptado;
    document.getElementById("desaparecerimagen").style.display = "none";
    document.getElementById("texto-boton").style.display = "initial";
           
}

function encriptar (stringParaEncriptar) {
    let matrizCodigo = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    stringParaEncriptar = stringParaEncriptar.toLowerCase();
    for (let i= 0; i<matrizCodigo.length; i++){
        if(stringParaEncriptar.includes(matrizCodigo[i][0])){
        stringParaEncriptar = stringParaEncriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
        inputTexto.value= ''
    }    
    return stringParaEncriptar;
}


function btndesencriptar() {
    var textoParaDesencriptar = desencriptar(inputTexto.value);
    mensaje.value = textoParaDesencriptar;
}

function desencriptar (comoDesencriptar) {
    let matrizCodigo = [["enter","e"],["imes","i"],["ai","a"],["ober","o"],["ufat","u"]];
    comoDesencriptar = comoDesencriptar.toLowerCase();
    for (let i= 0; i<matrizCodigo.length; i++) {
        if(comoDesencriptar.includes(matrizCodigo[i][0])){
            comoDesencriptar = comoDesencriptar.replaceAll(matrizCodigo[i][0],matrizCodigo[i][1])
        }
        inputTexto.value= ''
    }
    return comoDesencriptar;
}


document.getElementById("botoncopiar").onclick = (e) => {
    e.preventDefault();
    var textencrip  = document.querySelector("#mensaje");
    textencrip.select();
    navigator.clipboard.writeText(textencrip.value)
    textencrip.value = "";
    }
  