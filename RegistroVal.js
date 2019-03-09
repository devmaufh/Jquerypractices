$(init)
function init() {
    $('#btn').on("click", function () {
        $("#form1").validate({
            rules: {
                nombre:{required:true},
                apellidos:{required:true},
                correo:{required:true, email:true,minlength:8, maxlength:126},
                pwd: {required:true,maxlength:32},
                salario:{required:true,number:true},
                fecha:{required:true, date:true},
                cp:{required:true,minlength:5,maxlength:5,digits:true}
            },
            messages: {
                nombre:{required:"No puedes dejar este campo vacío"},
                apellidos:{required: "No puedes dejar este campo vacío"},
                correo:{required:"No puedes dejar este campo vacío", email:"Este campo debe ser un Email",minlength:"Debes ingresar al menos 8 caracteres", maxlength:"No puedes ingresar más de 126 caracteres"},
                pwd: {required:"Debes ingresar la contraseña",maxlength:"No puedes exceder los 32 caracteres"},
                salario:{required:"Debes ingresar un sueldo válido",number:"Este campo debe ser numérico"},
                fecha:{required:"Debes ingresar una fecha", date:"Debes ingresar una fecha válida"},
                cp:{required:"No puedes dejar vacío el campo",minlength:"Debes ingresar un código postal valido",maxlength:"No puedes exceder los 5 caracteres",digits:"Solo puedes ingresar dígitos"}        
            },
            errorElement: "div",
            errorClass: "invalid",
            errorPlacement: function(error, element){
                error.insertAfter(element)                
            },
            submitHandler: function(form){
                saveData();
            }
        });       
    });
}

function saveData() {
    alert("Datos correctos");    
}