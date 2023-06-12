function validar() {
    var ret_email = validar_email();
    var ret_contra = validar_contra();
    var ret_contrasena = validar_contrasena();
    var ret_direccion = validar_direccion();
    var ret_comuna = validar_comuna();
    var ret_numero = validar_numero();
    var ret_url = validar_url();
    var ret_pasatiempos = validar_pasatiempos();
    return ret_email && ret_contra && ret_contrasena && ret_direccion && ret_comuna && ret_numero && ret_url && ret_pasatiempos; 
}

function validar_email() {
    var email = document.getElementById("email").value;
    var div = document.getElementById("err_email");
    var arroba = email.indexOf("@");
    var punto = email.lastIndexOf(".");
    if (email == "") {
        div.innerText = "Campo obligatorio *";
        div.className = "text-danger";
        return false;
    } else {
        if (arroba < 1) {
            div.innerText = "El correo electrónico no tiene @ (arroba) o nombre de usuario";
            div.className = "text-danger";
            return false;
        } else {
            if (arroba < 2) {
                div.innerText = "El nombre de usuario del correo no es válido";
                div.className = "text-danger";
                return false;
            } else {
                if (arroba + 3 > punto || punto + 1 >= email.length - 1 ) {
                    div.innerText = "El nombre de dominio no es válido";
                    div.className = "text-danger";
                    return false;
                } else {
                    div.innerText = "";
                    return true;
                }
            }
        }
    }
}

function validar_contra() {
    var contra = document.getElementById("contra").value;
    var div = document.getElementById("err_contra");
    if (contra == "") {
        div.innerText = "Campo Obligatorio *";
        div.className = "text-danger";
        return false;
    } else {
        if (contra.length < 3 || contra.length > 6) {
            div.innerText = "Tiene que tener de 3 a 6 caracteres";
            div.className = "text-danger";
            return false;
        } else
        if (!/[a-zA-Z]/.test(contra) || !/\d/.test(contra)) {
            div.innerText = "Debe incluir al menos una letra mayúscula y un número";
            div.className = "text-danger";
            return false; 
        } else {
            div.innerText = "";
            return true;
        }
    }
}

function validar_contrasena() {
    var contrasena = document.getElementById("contrasena").value;
    var div = document.getElementById("err_contrasena");
    var contra = document.getElementById("contra").value;
    if (contrasena == "") {
        div.innerText = "La contraseña debe coincidir";
        div.className = "text-danger";
        return false;
    } else {
        if (contrasena != contra) {
            div.innerText = "La contraseña debe coincidir";
            div.className = "text-danger";
            return false;
        } else {
            div.innerText = "";
            return true;
        }
    }
}

function validar_direccion() {
    var direccion = document.getElementById("direccion").value;
    var div = document.getElementById("err_direccion");
    if (direccion == "") {
        div.innerText = "Campo Obligatorio *"
        div.className = "text-danger";
        return false;
    } else {
        if (direccion.length > 50) {
            div.innerText = "Haz superado el maximo de caracteres";
            div.className = "text-danger";
            return false
        } else {
            div.innerText = "";
            return true;
        }
    }
}

function validar_comuna() {
    var comuna = document.getElementById("comuna").value;
    var div = document.getElementById("err_comuna");
    if (comuna == "Seleccione su comuna..."){
        div.innerText = "Debe ingresar una opcion";
        div.className = "text-danger";
        return false;
    } else {
        div.innerText = "";
        return true;
    }
}

function validar_numero() {
    var numero = document.getElementById("numero").value;
    var div = document.getElementById("err_numero");
    if (numero == "") {
        div.innerText = "Campo Obligatorio *";
        div.className = "text-danger";
        return false;
    } else {
        if (isNaN(numero)) {
            div.innerText = "El numero ingresado no es valido";
            div.className = "text-danger";
            return false;
        } else {
            if (numero.length < 9 || numero.length > 9) {
                div.innerText = "Debe ingresar un número telefónico válido";
                div.className = "text-danger";
                return false;
            } else {
                div.innerText = "";
                return true;
            }
        }
    }
}

function validar_url() {
    var url = document.getElementById("url").value;
    var div = document.getElementById("err_url");
    var httpsPrefix = "https://www.";
    var httpPrefix = "http://www.";
    if (url == "") {
        div.innerText = "";
        return true;
    } else {
        if (url.startsWith(httpsPrefix) || url.startsWith(httpPrefix)) {
            div.innerText = "";
            return true;
        } else {
            div.innerText = "URL inválida. Ejemplo válido: https://www.example.com";
            div.className = "text-danger";
            return false;
        }
    }
}


const pasatiempos = [];
function pasatiempos_push() {
  let input = document.getElementById("pasatiempos");
  var div_err = document.getElementById("err_pasatiempos");
  if (input.value == "") {
    div_err.innerText = "Campo vacio *";
    div_err.className = "text-danger";
  } else {
    pasatiempos.push(input.value);
    input.value = "";
    div_err.innerText = "";
    let div = document.getElementById("lista");
    div.innerHTML = "";
    let ul = document.createElement("ul");
    div.appendChild(ul);
    for (let i = 0; i < pasatiempos.length; i++) {
      let li = document.createElement("li");
      li.innerHTML = pasatiempos[i];
      ul.appendChild(li);
    }
    validar_pasatiempos();
  }
}

function validar_pasatiempos() {
  var lista = pasatiempos;
  var div = document.getElementById("err_pasatiempos");
  if (lista.length < 2) {
    div.innerText = "Mínimo 2 pasatiempos";
    div.className = "text-danger";
    return false;
  } else {
    div.innerText = "";
    return true;
  }
}