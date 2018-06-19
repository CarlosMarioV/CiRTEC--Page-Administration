var nodemailer = require ('nodemailer')

var app = angular.module("cirtec")
  .controller('LandingPageCtrl', function ($scope) {
    var home = this;
    home.saludar = 'Hola, mundo';
    console.log('Hola, estoy en el controlador.');

    var transporter = nodemailer.createTransport({
      service: 'hotmail',
      auth: {
        user: 'roboticatecsc@hotmail.com',
        pass: 'robotica12345'
      }
    });
    
    var mailOptions = {
      from: 'roboticatecsc@hotmail.com',
      to: 'eblanco707@gmail.com',
      subject: 'Robotica Tec SC',
      text: 'That was easy!'
    };
    
    home.enviarCorreo = function enviarCorreo(pContactus){
      console.log(pContactus)

      // transporter.sendMail(mailOptions, function(error, info){
      //   if (error) {
      //     console.log(error);
      //   } else {
      //     console.log('Email sent: ' + info.response);
      //   }
      // });
    }
  });