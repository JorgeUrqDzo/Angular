//Configuracion de rutas API
var host = 'http://localhost:48603/';
var hostAPI = 'http://localhost:64632/';

angular.module('Controles')
    .constant('nzConfig', {
        //WebControles
        GetFormularios: host + 'Formularios/GetFormularios',
        GetFormData: host + 'Arbol/Inicializar/',
        GetSeccionConfig: host + 'Secciones/Guardar',
        GetControlesConfig: host + 'SeccionControl/Editar',
        GuardarFormularioNuevo: host + 'Formularios/Guardar',


        //API
        API_URL: hostAPI + 'Api',
        ACTION_SAVE : "/Controles/Guardar/",
        ACTION_GET : "/Controles/Get/",
        ACTION_DATASOURCE : "/DataSource/Get/"
    });
