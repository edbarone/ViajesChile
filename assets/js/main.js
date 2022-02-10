
// Funcion que desarrollo scroll suave al hacer click en enlaces del encabezado de la pagina
$(function(){
    $("a").click(function(event) {
        if (this.hash !== "") {
       event.preventDefault();
        var gato = this.hash;
       $('html, body').animate({
    scrollTop: $(gato).offset().top
    }, 800, function(){
      window.location.hash = gato;
      });
      } 
      });
      });
     
// Funcion que desarrollo scroll suave en pagina
    $(function () {
        $('[data-toggle="tooltip"]').tooltip()
    })