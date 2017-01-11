angular.module('Controles').filter('typeCtrl', function() {
    return function(input) {
        // if(type){
        //     return input.Titulo
        // }
        // else {
        //     return input.Llave
        // }
        var tipo;
        switch (input.toString()) {
            case "1":
                tipo = "Texto";
                break;
            case "2":
                tipo = "Numerico";
                break;
            case "3":
                tipo = "Fecha";
                break;
            case "4":
                tipo = "CheckBoxList";
                break;
            case "5":
                tipo = "RadioButtonList";
                break;
            case "6":
                tipo = "List";
                break;
            case "7":
                tipo = "Multiseleccion";
                break;
            case "8":
                tipo = "Switch";
                break;
            case "9":
                tipo = "TextArea";
                break;
            case "10":
                tipo = "Subir Documentos";
                break;
            default:
                tipo = "desconocido";
        }

        return tipo;
    };
});
