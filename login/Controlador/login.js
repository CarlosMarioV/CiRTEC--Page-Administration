var app = angular.module("cirtec")
    .controller('LoginCtrl', function ($scope, requestService) {
        var vm = this;
        var url = "";
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
                data: '',
                params: "?username="+pUser.username+"&password="+pUser.password
            }, {
                url: "localhost:8000/api/login"
                
            }).then(function (respuesta) {
                console.log(respuesta);
            });

        }
    });