function autenticar() {
    if ($("#userEmail").val() === "" && $("#userPassword").val() === "") {
        alert("Los campos no pueden estar vacios Vacios");
    } else if ($("#userEmail").val() === "" || $("#userPassword").val() === "") {
        alert("Los campos no pueden estar vacios Vacios");
    }
    else {
        let objetoJS = {
            email: $("#userEmail").val(),
            password: $("#userPassword").val()
        };

        $.ajax({
            type: 'GET',
            /** 
             *              url: "http://localhost:8080/api/user/" + $("#userEmail").val() + "/" + $("#userPassword").val(),   
             *
             * 
             */
             url:"http://129.151.111.172:8080/api/user/" + $("#userEmail").val() + "/" + $("#userPassword").val(), 
             
            contentType: "application/json;  charset=utf-8",
            dataType: 'json',

            success: function (response) {
                if (response.id === null) {
                    alert("Usuario o contraseña invalido, o registrese para continuar. Gracias. ");
                }
                else {                    
                    alert("Usuario y contraseña validos ");
                    VerificarUsuario(response.id);
                }
            },
        });
    }
}

function VerificarUsuario(idUsuario){
    let objetoJS = {
        id: idUsuario,        
    }

    var dataToSend=JSON.stringify(objetoJS);
    //JSON= JavaScript Object Notation
    $.ajax({
	dataType: 'json',
	data:objetoJS,
	contentType:'application/json',
    /**
     * 
     * url: "http://localhost:8080/api/user/"+idUsuario,
     *
     * 
     */
    
     url: "http://129.151.111.172:8080/api/user/"+ idUsuario,
	type:'GET',
	
	success:function(response) {
        if(response.type ==="ASE"){
            alert("Bienvenido:  "+response.name);
            document.getElementById("asesor").hidden =false;
            document.getElementById("asesorPedido").hidden= false;
            document.getElementById("login").hidden =true;
            pasoAsesor(response);
            obtenerProductos();
        } else if(response.type ==="COORD"){
            alert("Bienvenido:  "+ response.name);
            document.getElementById("coordinador").hidden =false;
            document.getElementById("login").hidden =true;
            pasoCoordinador(response);

        }

	},

	
	error: function(jqXHR, textStatus, errorThrown) {
        console.log("Error" + errorThrown);

	}
    });


}

function pasoAsesor(arrayObjetos) {

    $("#asesorResultado").empty();
    $("#asesorResultado").append('<tr>');
    $("#asesorResultado").append("<td>"+arrayObjetos.identification+"</td>");
    $("#asesorResultado").append("<td>"+arrayObjetos.name+"</td>");
    $("#asesorResultado").append("<td>"+arrayObjetos.email+"</td>");
    $("#asesorResultado").append("<td> Coordinador</td>");
    $("#asesorResultado").append("<td>"+arrayObjetos.zone+"</td>");
    $("#asesorResultado").append("</tr>");
    

}

function pasoCoordinador(arrayObjetos) {

    $("#coordinadorResultado").empty();
    $("#coordinadorResultado").append('<tr>');
    $("#coordinadorResultado").append("<td>"+arrayObjetos.identification+"</td>");
    $("#coordinadorResultado").append("<td>"+arrayObjetos.name+"</td>");
    $("#coordinadorResultado").append("<td>"+arrayObjetos.email+"</td>");
    $("#coordinadorResultado").append("<td> Coordinador</td>");
    $("#coordinadorResultado").append("<td>"+arrayObjetos.zone+"</td>");
    $("#coordinadorResultado").append("</tr>");
    

}

function obtenerProductos(){


    $.ajax({
    /**
     * 
     *      url: "http://localhost:8080/api/accessory/all",

     *
     */
    
     url: "http://129.151.111.172:8080/api/accessory/all",
        
	contentType: "application/json; charset=utf-8",
	dataType: 'json',
	type:'GET',
      
	success:function(response) {
	    console.log(response);
	    $("asesorpedidoResultado").empty();
        for(i=0;i<response.length;i++){
            $("#asesorpedidoResultado").append("<tr>");
            $("#asesorpedidoResultado").append("<td><button class=\"btn  btn-sm\"  id=\"btnOrdenAgregar\" onclick=\"Agregar('"+response[i].reference+"')\">Agregar</button> </td>");
            $("#asesorpedidoResultado").append("<td><button class=\"btn btn-primary btn-sm\"  id=\"btnOrdenEliminar\" onclick=\"Eliminar('"+response[i].reference+"')\">Eliminar</button> </td>");
            $("#asesorpedidoResultado").append("<td>"+response[i].reference+"</td>");            
            $("#asesorpedidoResultado").append("<td>"+response[i].category+"</td>");            
            $("#asesorpedidoResultado").append("<td>"+response[i].description+"</td>");            
            $("#asesorpedidoResultado").append("<td>"+response[i].price+"</td>");            
            $("#asesorpedidoResultado").append("<td> <img src=\""+response[i].photography+"\" width=\"120\" height=\"80\"></img></td>");            
            $("#asesorpedidoResultado").append("<td><input id=Vals type=\"number\"></td>");            
		    $("#asesorpedidoResultado").append("</tr>");
      
          }	 
	},
	
	error: function(jqXHR, textStatus, errorThrown) {

        console.log("acá"+ response);
	    
	}
    });
}