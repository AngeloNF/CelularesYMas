

fetch('https://raw.githubusercontent.com/AngeloNF/CelularesYMas/main/celulares.json')
    .then((response) => response.json()).then(json => cargarcelulares(json))


cargarcelulares = function (datos) {
    datos.forEach(element => {
        var carac = ""
        element.caracteristicas.forEach(element => {
            carac += " <li>" + element + "</li>"
        });


        var variable = "" +
            " <div class=\"card col-auto \" style=\"width: 25rem;\">" +
            "            <img src=\"" + element.imagen + "\" class=\"card-img-top\" alt=\"" + element.id + "\">" +
            "            <div class=\"card-body\">" +
            "                <h4 class=\"card-title\">" + element.id + "</h4>" +
            "                <h6 class=\"card-subtitle mb-2\">" + element.precio + "</h6>" +
            "                <p class=\"card-text\" >" +
            "                    Descripción del Producto:" +
            "                <ul id=\"descripcion-list\">" + 
                                carac+
            "                </ul>" +
            "                </p>" +
            "                <a type=\"button\" href=\"https://wa.me/50664363905\"class=\"btn btn-success m-1\"><i class=\"bi bi-whatsapp\"></i>  WhatsApp Escazú</a>" +
            "                <a type=\"button\" href=\"https://wa.me/50687998062\"class=\"btn btn-success m-1\"><i class=\"bi bi-whatsapp\"></i>  WhatsApp San José</a>" +
            "           </div>" +
            " </div>" +
            "";
        $("#celularesContainer").append(variable);
    });
}