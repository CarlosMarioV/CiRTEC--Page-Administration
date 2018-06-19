
var app = angular.module("cirtec")
  .controller('LandingPageCtrl', function ($scope) {
    var home = this;
    home.saludar = 'Hola, mundo';
    console.log('Hola, estoy en el controlador.');

    home.contactus = {
      subject: "",
      email: "",
      message: ""
    }

    home.enviarCorreo = function enviarCorreo() {
      console.log(home.contactus)

      var template_params = {
        "subject": home.contactus.subject,
        "to_name": "Comunidad Robotica TEC SC",
        "from_name": home.contactus.email,
        "message_html": home.contactus.message
      }

      var service_id = "default_service";
      var template_id = "template_dv2AHZcF";
      emailjs.send(service_id, template_id, template_params);
      alert("Se ha enviado un correo a la Comunidad de Robótica");
    }
  });