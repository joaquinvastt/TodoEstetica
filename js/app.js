function ValidarCampos() {

    var NombreTienda = document.getElementById("NombreTienda").Value;
    var Direccion = document.getElementById("Direccion").Value;
    var Correo = document.getElementById("Correo").Value;
    var NombreRepr = document.getElementById("NombreRepr").Value;
    var Telefono = document.getElementById("Telefono").Value;

    if (NombreTienda == null) {

        alert("Ingrese el nombre de la tienda");
        console.log("bien");

    }

}

