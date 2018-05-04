$(document).ready(function() {
  //Cambia de color el nav cuando se le hae scroll y llega a los valores puestos abajo.
  $(window).scroll(function() {
    if ($(this).scrollTop() > 238.39999389648438) {
      $('.navbar').addClass('nav');
    } else {
      $('.navbar').removeClass('nav');
    }
  });

  //Realiza la transicion de las diferentes partes de la vista suavemente, cuando se navega por el nav.
  $('a[href^="#"]').click(function() {
    var destino = $(this.hash);
    if (destino.length == 0) {
      destino = $('a[name="' + this.hash.substr(1) + '"]');
    }
    if (destino.length == 0) {
      destino = $('html');
    }
    $('html, body').animate({ scrollTop: destino.offset().top }, 500);
    return false;
  });
});
