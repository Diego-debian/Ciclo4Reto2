function regresar(){
  window.location.href = "../index.html";
 }


let userID = 0;
function registros(){
    if($("#userEmail").val() === "" && $("#userPassword1").val()==="" 
        && $("#userPassword2").val()==="" && $("#userName").val()==="" 
        && $("#userIdentification").val()==="" && $("#userAddress").val()==="" 
        && $("#userPhone").val()==="" && $("#userZone").val()===""
        && $("#userType").val()===""){
        alert("Los campos no pueden estar vacios Vacios"); 
    }else if ($("#userEmail").val() === "" || $("#userPassword1").val()==="" 
        || $("#userPassword2").val()==="" || $("#userName").val()==="" 
        || $("#userIdentication").val()===""  || $("#userAddress").val()==="" 
        || $("#userPhone").val()==="" || $("#userZone").val()===""
        || $("#userType").val()===""){
        alert("Los campos no pueden estar vacios Vacios");  
    }
    else{
        $.ajax({
            type: 'GET',
	    /** 
         * 
         * url: "http://152.70.223.94:8080/api/user/" + $("#userEmail").val() + "/" + $("#userPassword1").val(),   
         * 
         */
         
         url: "http://localhost:8080/api/user/" + $("#userEmail").val() + "/" + $("#userPassword1").val() ,
            
            contentType: "application/json;  charset=utf-8",
            dataType: 'json',
            success: function (response) {
                console.log(response);
                if(response.id === null){
                    if($("#userPassword1").val() !== $("#userPassword2").val()){
                        alert("Los contraseñas no coinciden.")
                        }
                        else{
                            valorID();
                        }
                } else{               
                    if(response != null){
                    alert("Usted ya esta registrado o el correo ya existe.");
                    console.log("Correo exise ");
                    window.location.reload();
                    regresar();
                    }
                }
            },
            error: function(jqXHR, textStatus, errorThrown) {
                alert("No se guardo correctamente, mire que las categorias esten bien");
            
            
            }
        });
    }
}


function valorID(){
    $.ajax({
        type: 'GET',
    /** 
     * 
     * url: "http://152.70.223.94:8080/api/user/all",
     * 
     *
     */
     
     url: "http://localhost:8080/api/user/all",
        
        contentType: "application/json;  charset=utf-8",
        dataType: 'json',
        success: function (response) {
        userID = response.length;
        Register();

        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert("Errores ");
        
        
            
        }
    });
    return userID;
}



function Register(){

    let objetoJS={
        id:    userID,
        email:$("#userEmail").val(),
        password:$("#userPassword1").val(),
        name:$("#userName").val(),
        identification:$("#userIdentification").val(),
        address:$("#userAddress").val(),
        cellPhone:$("#userPhone").val(),        
        zone:$("#userZone").val(),
        type:$("#userType").val()
         }
    console.log("Estoy acá" + objetoJS);
    $.ajax({
        type:'POST',
        /**
         *
         * url:"http://152.70.223.94:8080/api/user/new", 
         * 
         *
         *  
         */ 
         
         url:"http://localhost:8080/api/user/new",
        contentType: "application/json;  charset=utf-8",
        dataType: 'json',
        data: JSON.stringify(objetoJS),
        
        success:function(response) {
            console.log(response);
            console.log("Se guardo correctamente");
            alert("Se guardo correctameente");  
            regresar();
        },
        
        error: function(jqXHR, textStatus, errorThrown) {
            alert("No se guardo correctamente, mire que las categorias esten bien" + errorThrown);
	    
	    
        }
    });
}
