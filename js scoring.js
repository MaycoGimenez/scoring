document.getElementById("button").addEventListener("click", function() {
    document.getElementById("approved").style.display = "block";
    setTimeout(function() {
      document.getElementById("approved").innerHTML = "APROBADO";
      document.getElementById("approved").style.backgroundColor = "rgb(4, 255, 0)";
      document.getElementById("approved").style.color = "white";
      document.getElementById("approved").style.animation = "none";
    }, 5000);
  });

document.getElementById("nombre").addEventListener("click", function(){
    document.getElementById("approved").style.display="none";
    document.getElementById("approved").innerHTML = "Verificando...";
    document.getElementById("approved").style.backgroundColor = "white";
    document.getElementById("approved").style.color = "grey";
    document.getElementById("approved").style.animation = "fade 1s ease-in-out infinite";
})

document.getElementById("DNI").addEventListener("click", function(){
    document.getElementById("approved").style.display="none";
    document.getElementById("approved").innerHTML = "Verificando...";
    document.getElementById("approved").style.backgroundColor = "white";
    document.getElementById("approved").style.color = "grey";
    document.getElementById("approved").style.animation = "fade 1s ease-in-out infinite";
})

document.getElementById("financiacion").addEventListener("click", function(){
    document.getElementById("approved").style.display="none";
    document.getElementById("approved").innerHTML = "Verificando...";
    document.getElementById("approved").style.backgroundColor = "white";
    document.getElementById("approved").style.color = "grey";
    document.getElementById("approved").style.animation = "fade 1s ease-in-out infinite";
})