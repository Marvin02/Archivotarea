document.addEventListener('DOMContentLoaded', function() { // Falta un paréntesis de apertura en la declaración de la función del evento //
    console.log('DOM completamente cargado y analizado'); //Falta una comilla de cierre en el mensaje del console.log.//
    var navLinks = document.querySelectorAll('nav ul li a'); 
    navLinks.forEach(function(link) { //Falta un paréntesis de cierre en la función de callback del método forEach //
        link.addEventListener('click', function(event) {
            alert('Has hecho clic en un enlace!');
        });
    }); //Hay un paréntesis de cierre extra después del cierre del método forEach.//
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault();
        alert('Formulario enviado');
    });
});
