//Configuracion de rutas API
var host = 'http://localhost:48603/';
angular.module('Controles')
    .constant('nzConfig', {
        GetFormularios: host + 'Formularios/GetFormularios',
        GetFormData: host + 'Arbol/Inicializar',
        GetSeccionConfig : host + 'Secciones/Guardar',
        GetControlesConfig: host + 'SeccionControl/Editar'
    });
