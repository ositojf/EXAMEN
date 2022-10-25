
const loginForm = document.querySelector("#login-form");

loginForm.addEventListener("submit", (e) => {//evento
  e.preventDefault();
  const user = loginForm["Logueo"].value;
  const userWelcome = document.querySelector("#Loguinp");
  userWelcome.innerHTML = user.length ? `BIENVENID(@) ${user}` :" ";
});



const inputs=document.querySelectorAll("input.sumar");
 
// creamos el evento keyup para cada input que tiene la clase .sumar
for(el of inputs) {
    el.addEventListener("keyup", sumar);
} 
/**
 * Funcion que se ejecuta cada vez que se añade una letra en un cuadro de texto
 * Suma los valores de los cuadros de texto
 */
function sumar()
{
    var bs =Number(document.getElementById('valor1').value);
    var dol=6.84;
    var Resultado=dol*bs;
    document.getElementById("total").value=Resultado;
}

function verificar(el)
{
  return true;
}