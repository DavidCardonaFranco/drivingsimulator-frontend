document.getElementById("saludo").innerHTML = "Hola "+localStorage.getItem("email")+", desde aqui puedes empezar la simulacion";

data = JSON.parse(localStorage.getItem("simulaciones"));
console.log(data.length)
document.getElementById("time").innerHTML = "Tiempo: "+data[data.length-1][2];
document.getElementById("user").innerHTML = "Usuario: "+data[data.length-1][0];
document.getElementById("date").innerHTML = "Fecha: "+ data[data.length-1][1];


function startgame(){
    document.location.href="../html/game.html";
}