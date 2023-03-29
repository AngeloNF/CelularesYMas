

fetch('https://raw.githubusercontent.com/AngeloNF/CelularesYMas/main/celulares.json')
    .then((response) => response.json()).then(json => cargarcelulares(json))


cargarcelulares = function (datos) {
    datos.forEach(element => {
        var carac = ""
        element.caracteristicas.forEach(element => {
            carac += "<li>" + element + "</li>"
        });


        var variable = "" +
            "<div class=\"col-12 col-sm-6 col-lg-4 my-2 \">" +
            "   <div class=\"card  rounded-4 h-100 \">" +
            "       <img src=\"" + element.imagen + "\" class=\"card-img-top rounded-4\" alt=\"" + element.id + "\" >" +
            "       <div class=\"card-body d-flex flex-column\">" +
            "           <h4 class=\"card-title\">" + element.id + "</h4>" +
            "           <h5 class=\"card-subtitle mb-2\">" + element.precio + "</h5>" +
            "           <p class=\"card-text\" >" +
            "               Descripción del Producto:" +
            "           </p>" +
            "           <ul class=\"mb-auto\" id=\"descripcion-list\">" +
            carac +
            "           </ul>" +
            "           <div class=\"btn-group my-2 \" role=\"group\" aria-label=\"Basic example\">" +
            "               <a type=\"button\" href=\"https://www.facebook.com/celuymas\"class=\"btn btn-primary\"><i class=\"bi bi-facebook\"></i>  Facebook</a>" +
            "               <a type=\"button\" href=\"https://www.instagram.com/celu.mas\"class=\"btn btn-danger\"><i class=\"bi bi-instagram\"></i>  Instagram</a>" +
            "           </div>" +
            "           <div class=\"btn-group my-2\" role=\"group\" aria-label=\"Basic example\">" +
            "               <a type=\"button\" href=\"https://wa.me/50664363905?text=Hola%2C%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20este%20celular%20" + encodeURIComponent(element.id) + "\"class=\"btn btn-success \"><i class=\"bi bi-whatsapp\"></i>  WhatsApp Escazú</a>" +
            "               <a type=\"button\" href=\"https://wa.me/50687998062?text=Hola%2C%20Quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20este%20celular%20" + encodeURIComponent(element.id) + "\"class=\"btn btn-success \"><i class=\"bi bi-whatsapp\"></i>  WhatsApp San José</a>" +
            "           </div>" +
            "       </div>" +
            "   </div>" +
            " </div>" +
            "";
        $("#celularesContainer").append(variable);
    });
}