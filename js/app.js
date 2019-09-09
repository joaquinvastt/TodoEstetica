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
            cambiaColor("#Nombre");
            return false;

        } else {
            $("#mensaje1").fadeOut();
            cambiaColorNormal("#Nombre");
        }
        if (Apellido == "") {
            $("#mensaje2").fadeIn();
            cambiaColor("#Apellido");
            return false;

        } else {
            $("#mensaje2").fadeOut();
            cambiaColorNormal("#Apellido");

        }

        if (Direccion == "") {
            $("#mensaje3").fadeIn();
            cambiaColor("#Direccion");
            return false;

        } else {
            $("#mensaje3").fadeOut();
            cambiaColorNormal("#Direccion");
        }
        if (Correo == "") {
            cambiaColor("#Correo");
            $("#mensaje4").fadeIn();
            $("#mensaje5").fadeOut();
            return false;
        } else {
            $("#mensaje4").fadeOut();
            cambiaColorNormal("#Correo");
        }

        if (Correo == null || Correo.length == 0 || !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/.test(Correo)) {
            cambiaColor("#Correo");
            $("#mensaje5").fadeIn();

        } else {
            $("#mensaje5").fadeOut();
            cambiaColorNormal("#Correo");
        }

        if (Contraseña1 == "") {
            cambiaColor("#Contraseña");
            $("#mensaje6").fadeIn();

            return false;

        } else {
            $("#mensaje6").fadeOut();
            cambiaColorNormal("#Contraseña");

        }

        if (Contraseña2 == "") {
            cambiaColor("#ConfContra");
            $("#mensaje8").fadeOut();
            $("#mensaje7").fadeIn();
            return false;


        } else {
            $("#mensaje7").fadeOut();
            cambiaColorNormal("#ConfContra");

        }

        if (Contraseña1 == Contraseña2) {
            $("#mensaje8").fadeOut();

        } else {
            $("#mensaje8").fadeIn();
            return false;
        }

    });

});

function cambiaColor(campo) {
    $(campo).css({
        border: "1px solid #dd5144"
    });
}

function cambiaColorNormal(campo) {
    $(campo).css({
        border: "1px solid #8C8C8C"
    });
}


function nuevaventana (URL){
   window.open(URL,"ventana1","width=600,height=600,scrollbars=NO")
}
