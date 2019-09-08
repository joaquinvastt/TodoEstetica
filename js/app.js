$(document).ready(function() {

    $('#enviar').click(function() {


        var Nombre = $("#Nombre").val(),
            Apellido = $("#Apellido").val(),
            Direccion = $("#Direccion").val(),
            Correo = $("#Correo").val(),
            Contraseña1 = $("#Contraseña").val(),
            Contraseña2 = $("#ConfContra").val();

        if (Nombre == "") {

            $("#mensaje1").fadeIn();
            return false;

        } else {
            $("#mensaje1").fadeOut();
        }
        if (Apellido == "") {
            $("#mensaje2").fadeIn();
            return false;

        } else {
            $("#mensaje2").fadeOut();
        }

        if (Direccion == "") {
            $("#mensaje3").fadeIn();
            return false;

        } else {
            $("#mensaje3").fadeOut();
        }
        if (Correo == "") {
            $("#mensaje4").fadeIn();
            $("#mensaje5").fadeOut();
            return false;
        } else {
            $("#mensaje4").fadeOut();
        }

        if (Correo == null || Correo.length == 0 || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(Correo)) {
            $("#mensaje5").fadeIn();

        } else {
            $("#mensaje5").fadeOut();
        }

        if (Contraseña1 == "") {
            $("#mensaje6").fadeIn();

            return false;

        } else {
            $("#mensaje6").fadeOut();

        }

        if (Contraseña2 == "") {
            $("#mensaje8").fadeOut();
            $("#mensaje7").fadeIn();
            return false;


        } else {
            $("#mensaje7").fadeOut();

        }

        if (Contraseña1 == Contraseña2) {
            $("#mensaje8").fadeOut();

        } else {
            $("#mensaje8").fadeIn();
            return false;
        }

    });

});