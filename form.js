let registros = [];

let nombre = document.querySelector("#full-name");
let id = document.querySelector("#id");
let date = document.querySelector("#date"); 
let mail = document.querySelector("#mail");
let city = document.querySelector("#city");
let nacimiento = document.querySelector("#origin");

let artist = document.querySelector("#artist");
let song1 = document.querySelector("#one");
let song2 = document.querySelector("#two");
let song3 = document.querySelector("#three");

let btnEnviar = document.querySelector("#enviar");
let boton = document.querySelector('#boton')

btnEnviar.addEventListener('click',()=>{
    let persona = {
        usuario: nombre.value,
        identificacion: id.value,
        fecha_nacimiento: date.value,
        Correo: mail.value,
        Ciudad_residencia: city.value,
        Ciudad_origen: nacimiento.value,
        Artista: artist.value,
        canciones:[song1.value, song2.value,song3.value]
};
    alert("usuario: "+persona["usuario"]+", ha sido ingresado correctamente.")
    registros.push(persona)

})
/*for(i=0; i <= registros.length -1; i ++){
    console.log(registros[i])
}*/

let btn = document.getElementById('mostrar')
btn.addEventListener('click',()=>{
    let registro = document.getElementById("registros")
    let datos = ""
    for(let objeto of registros){

        datos += `
       <tr>
        <td>${objeto.usuario}</td>
        <td>${objeto.identificacion}</td>
        <td>${objeto.fecha_nacimiento}</td>
        <td>${objeto.Correo}</td>
        <td>${objeto.Ciudad_residencia}</td>
        <td>${objeto.Ciudad_origen}</td>
        <td>${objeto.Artista}</td>
        <td>${objeto.canciones[0]}</td>
        <td>${objeto.canciones[1]}</td>
        <td>${objeto.canciones[2]}</td>
       </tr>
       `
    }

    registro.innerHTML = datos

})
















