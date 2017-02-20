//Configuracion de rutas API
var host = 'http://localhost:48603/';
var hostAPI = 'http://localhost:64632/';

angular.module('Controles')
    .constant('nzConfig', {
        //WebControles
        GetFormularios: host + 'Formularios/GetFormularios/',

        GetFormData: host + 'Arbol/Inicializar/',
        GetSeccionConfig: host + 'Secciones/GuardarSec',
        GetControlesConfig: host + 'SeccionControl/Editar/',
        GetTipoControl: host + 'SeccionControl/getCatalogoTipoControl',
        GuardarFormularioNuevo: host + 'Formularios/Guardar',
        GuardarGrupo: host + 'Secciones/GuardarGrupo/',
        GetDBTablesName: host + 'Secciones/getDBTablesName',
        GetTableColumnName: host + 'Secciones/getTableColumnName/',
        GuardarSeccion: host + 'Secciones/GuardarSeccion',
        GetIconos: host + 'Secciones/GetIconos',
        GetGrupos: host + 'Secciones/ObtenerGrupos',


        //API
        API_URL: hostAPI + 'Api',
        ACTION_SAVE: "/Controles/Guardar/",
        ACTION_GET: "/Controles/Get/",
        ACTION_DATASOURCE: "/DataSource/Get/"
    });

angular.module('Controles')
.constant('loading', {
    loadingConfig: {
        logo: "assets/img/nezter-landing-solutions.png",
        backgroundColor: '#ebedee',
        loadingHtml: '<h3 class="loading-message">Cargando contenido...</h3><div class="sk-fading-circle"><div class="sk-circle1 sk-circle"></div><div class="sk-circle2 sk-circle"></div><div class="sk-circle3 sk-circle"></div><div class="sk-circle4 sk-circle"></div><div class="sk-circle5 sk-circle"></div><div class="sk-circle6 sk-circle"></div><div class="sk-circle7 sk-circle"></div><div class="sk-circle8 sk-circle"></div><div class="sk-circle9 sk-circle"></div><div class="sk-circle10 sk-circle"></div><div class="sk-circle11 sk-circle"></div><div class="sk-circle12 sk-circle"></div></div>'
    }
});
