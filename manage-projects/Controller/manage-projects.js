var app = angular.module("cirtec")
    .controller('ManageProjectsCtrl', function ($scope, requestService) {
        var vm = this;
        vm.listaProyectos = [];

        vm.get = function get() {
            requestService.getRequest({
                params: '',
                data: ''
            }, {
                url: "http://localhost:8000/api/proyectos"
            }).then(function (respuesta) {
                console.log(respuesta);
                if (Object.keys(respuesta).length === 0){
                    alert("No se encontraron proyectos")
                }
                else{
                    vm.listaProyectos = respuesta;
                }
            });
        };
        vm.get();


        vm.add = function add(pProject) {
            console.log(pProject);
            pProject.foto = "Prueba"
            if (pProject === undefined) {
                alert('Datos inconsistentes');
                return;
            }

            var data = {
                params: '',
                data: pProject
            };

            requestService.postRequest(data, {
                url: 'http://localhost:8000/api/proyectos/crear'
            }).then(function (res) {
                console.log(res)
                if (res) {
                    alert("Se insertó un nuevo proyecto");
                    // return;
                }
                vm.get();
                vm.clearV();
            })
            
        }

        vm.update = function update(pProject) {
            requestService.putRequest({
                params: '',
                data: pProject
            }, {
                    url: 'http://localhost:8000/api/proyectos/modificar'
                }).then(function (res) {
                    if (res) {
                        alert("Se modificó el proyecto seleccionado");
                        // return;
                    }
                    vm.get();
                    vm.clearV();
                })
        };

        vm.delete = function deleteN(pProjectId) {
            if (!confirm('Seguro de realizar esta acción?')) {
                return;
            }
            var data = {
                params: pProjectId,
                data: ''
            };
            requestService.deleteRequest(data, {
                url: 'http://localhost:8000/api/proyectos/eliminar/'
            }).then(function (res) {
                console.log(res)
                if (res.deleted == 1){
                    alert("Eliminado con éxito")
                }
                else{
                    alert("El elemento no se pudo borrar")
                }
                vm.get();
            })
        }

        vm.clearV = function clear() {
            vm.project = {
                id: undefined,
                nombre: undefined,
                descripcion: undefined,
                foto: undefined,
            };
        };

        vm.select = function select(pProject) {
            vm.project = {
                id: pProject.id,
                nombre: pProject.nombre,
                descripcion: pProject.descripcion,
                foto: pProject.foto
            };
        };
       
      
    });