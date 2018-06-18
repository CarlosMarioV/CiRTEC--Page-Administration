var app = angular.module("cirtec")
    .controller('LoginCtrl', function ($scope, requestService) {
        var vm = this;
        vm.user = {
            username: "",
            password: ""
        };
        vm.startSesion = function startSesion(pUser) {
            if (pUser.username === "" || pUser === "") {
                alert("Verifique los datos, puede que vengan en blanco!");
                return
            };

            //TODO: URL del servidor en laravel...
            requestService.getRequest({
                data: pUser,
                params: ''
            }, {
                url: ""
            }).then(function (respuesta) {
                console.log(respuesta);
            });

        }
    });