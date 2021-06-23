function validateForm() {
    var name = document.forms["formServicio"]["nombre"];
    if (name.value == "") {
      name.setCustomValidity("This field cannot be left blank");
      return false;
    }else{
        name.setCustomValidity("");
    }
    var descripcion = document.forms["formServicio"]["descripcion"];
    if (descripcion.value == "") {
        descripcion.setCustomValidity("This field cannot be left blank");
      return false;
    }else{
        descripcion.setCustomValidity("");
    }
    var categoria = document.forms["formServicio"]["categoria"];
    if (categoria.value == "") {
        categoria.setCustomValidity("This field cannot be left blank");
      return false;
    }else{
        categoria.setCustomValidity("");
    }
    var subcategoria = document.forms["formServicio"]["subcategoria"];
    if (subcategoria.value == "") {
        subcategoria.setCustomValidity("This field cannot be left blank");
      return false;
    }else{
        subcategoria.setCustomValidity("");
    }
    var preguntas = document.forms["formServicio"]["preguntas"];
    if (preguntas.value == "") {
        preguntas.setCustomValidity("This field cannot be left blank");
      return false;
    }else{
        preguntas.setCustomValidity("");
    }
    var ServicioImagenes = document.forms["formServicio"]["ServicioImagenes"];
    if (ServicioImagenes.value == "") {
        ServicioImagenes.setCustomValidity("This field cannot be left blank");
      return false;
    }else{
        ServicioImagenes.setCustomValidity("");
    }
    var precio = document.forms["formServicio"]["precio"];
    if (precio.value == "") {
        precio.setCustomValidity("This field cannot be left blank");
      return false;
    }else{
        precio.setCustomValidity("");
    }
    
    
    return true;    
}
$(document).ready(function(){
    $('#btnGuardarServicio').click(function(){
        if(validateForm()){
            var formData= new FormData(document.getElementById('formServicio'));
            var fileSelect = document.getElementById('ServicioImagenes');
            var files = fileSelect.files;
            for (var i = 0; i < files.length; i++) {
                var file = files[i];
                formData.append('imagenes[]', file, file.name);
            }
            $.ajax({
                url: "/ServicioAQP/servicios/crud_servicio/save.php",
                type: "POST",
                dataType: "html",
                data: formData,
                cache: false,
                contentType: false,
                processData: false,
                success:function(respuesta){
                $("#formServicio")[0].reset();
                $('#recargaTablaServicio').load('/ServicioAQP/servicios/recargables/TablaServicios.php');
                $('#exampleModal').modal('hide');
                $("#exampleModal .close").click()
                }
            });
        }
        return false;
    });
    $('#categoria').on('change',function(){
        var categoriaID= $(this).val();
        alert("estamos aqui "+categoriaID);
        if(categoria){
            $.ajax({
                url: "/ServicioAQP/servicios/recargables/ajaxSubcategoria.php",
                type: "POST",
                data:'categoria='+categoriaID,
                success:function(html){
                    alert("estamos aquix2 "+ categoriaID);
                    $('#subcategoria').html(html);
                    
                }
            });
        }else{
            $('#subcategoria').html('<option value="">Selecciona una categoria primero</option>');
        }   
    });
    
 });
 function eliminarServicio(idRecibido){
    if(confirm("Seguro que desea eliminar? id= "+idRecibido)){
        $.ajax({
            url: "/ServicioAQP/servicios/crud_servicio/delete.php",
            type: "POST",
            data:'id='+idRecibido,
            success:function(enviado)
            {   
                if(enviado){
                    $('#recargaTablaServicio').load('/ServicioAQP/servicios/recargables/TablaServicios.php');
                }
                else{
                    alert("No se Elimino");
                }
            }
        });
    }else{
        alert("No se Elimino");
    }
    return false;
 }
 function eliminarS(idRecibido,iduser){
    if(confirm("Seguro que desea eliminar? id= "+idRecibido)){
        $.ajax({
            url: "/ServicioAQP/servicios/crud_servicio/delete.php",
            type: "POST",
            data:'id='+idRecibido,
            success:function(enviado)
            {   
                if(enviado){
                    $('#recargarusuario').load('/ServicioAQP/usuario/view/publicados.php',{"id":iduser});
                }
                else
                    alert("No se Elimino")
            }
        });
    }else{

    }
    return false;
 }
 function EliminarA(idRecibido,iduser){
    if(confirm("Seguro que desea eliminar? id= "+idRecibido)){
        $.ajax({
            url: "/ServicioAQP/servicios/eliminar/deleteA.php",
            type: "POST",
            data:'id='+idRecibido,
            success:function(enviado)
            {   
                if(enviado){
                    $('#recargarusuario').load('/ServicioAQP/usuario/view/adquiridos.php',{"id":iduser});
                    alert("Eliminado de Adquiridos");
                    //$('#recargaTablaServicio').load('/ServicioAQP/servicios/recargables/TablaServicios.php');
                }
                else
                    alert("No se Elimino")
            }
        });
    }else{
        alert("No se Elimino");
    }
    return false;
 }
 function EliminarF(idRecibido,iduser){
    if(confirm("Seguro que desea eliminar? id= "+idRecibido)){
        $.ajax({
            url: "/ServicioAQP/servicios/eliminar/deleteF.php",
            type: "POST",
            data:'id='+idRecibido,
            success:function(enviado)
            {   
                if(enviado){
                    $('#recargarusuario').load('/ServicioAQP/usuario/view/favoritos.php',{"id":iduser});
                   alert("Eliminado de favoritos");
                   
                }
                else{
                    alert("No se Elimino");
                }
            }
        });
    }else{
        alert("No se Elimino");
    }
    return false;
 }  
 function calificar(){
    
    var formData= new FormData(document.getElementById('formCalificacion'));
    
    $.ajax({
        //C:\xampp\htdocs\ServicioAQP\servicios\view\calificar.php
        url: "/ServicioAQP/servicios/view/calificar.php",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success:function(respuesta){
            alert(respuesta);
        }
    }); 
 }
 function comentar(){
    var id =document.getElementById('idServicio');
    var formData= new FormData(document.getElementById('FormComentario'));
    $.ajax({
        url: "/ServicioAQP/servicios/view/Addcomentario.php",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success:function(respuesta){
            //alert(respuesta);
            $('#Comentario').load('/ServicioAQP/servicios/view/comentarios.php',{"id":id.value});
        }
        
    });
    $("#FormComentario")[0].reset();
    return false;
 }
function filtrarC(idCat){   
    $('#subcategorias').load('/ServicioAQP/servicios/recargables/subcategoria.php',{"idCat":idCat});
    $('#ServicioCard').load('/ServicioAQP/servicios/recargables/ServiciosCard.php',{"idCat":idCat});
    $('.filc').removeClass("bm_select");
    $('#filc'+idCat).addClass("bm_select");
    return false;
}
function filtrarSC(idSubCat,idCat){   
    $('#ServicioCard').load('/ServicioAQP/servicios/recargables/ServiciosCard.php',{"idCat":idCat,"idCatSub":idSubCat});
    $('.filsc').removeClass("bm_select");
    $('#filsc'+idSubCat).addClass("bm_select");
    return false;
}
function favoritos(idSer){
    var data = "servicio="+idSer;
    $.ajax({
        url: "/ServicioAQP/servicios/view/AddFavorito.php",
        type: "POST",
        data: data,
        success:function(respuesta){
           alert(respuesta);
           $(".fav_"+idSer).addClass("heart_select");
        }
        
    });
    return false;
}
function adquirir(idSer){
    var data = "servicio="+idSer;
    $.ajax({
        url: "/ServicioAQP/servicios/view/AddServicio.php",
        type: "POST",
        data: data,
        success:function(respuesta){
           alert(respuesta);
        }
        
    });
    return false;
}
function reportar(){
    var id =document.getElementById('idServicio');
    var formData= new FormData(document.getElementById('formReport'));
    $.ajax({
        url: "/ServicioAQP/servicios/view/AddReport.php",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success:function(respuesta){
            alert(respuesta);
            $("#formReport")[0].reset();
        } 
    });  
    return false;
} 
function notificar(){
    var id =document.getElementById('idServicio');
    var formData= new FormData(document.getElementById('formNoticacion'));
    $.ajax({
        url: "/ServicioAQP/servicios/view/Addnotificaciones.php",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success:function(respuesta){
            alert(respuesta);
            $("#formNoticacion")[0].reset();
        }
    });
    
    return false;
}  