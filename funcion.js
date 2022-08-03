var getData = function ()
{
var nombre= document.getElementById("Nombre").value;
var correo= document.getElementById("Email").value;
var mensaje= document.getElementById("Mensaje").value;
if(nombre=="")
{
    var nombre= document.getElementById("Nombre").focus();
}
else
{
    if(correo=="")
    {
        var correo= document.getElementById("Email").focus();
    }
    else{
        
        
        alert(nombre+"  " + correo + "  " + mensaje);
    }
}

}



