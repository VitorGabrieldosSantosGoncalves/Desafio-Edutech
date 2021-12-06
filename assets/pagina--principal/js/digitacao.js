function typeWriter(elemento) {
    const tituloArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    tituloArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra
        }, 75 * i)
    });
}


const titulo = document.querySelector('h1');
typeWriter(titulo);






function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(function() {
            elemento.innerHTML += letra
        }, 45 * i)
    });
}




const texto = document.querySelector('h2');
typeWriter(texto);