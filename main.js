jogador1 = ""
jogador2 = ""
function logar(){
    jogador1 = document.getElementById("player1").value
    jogador2 = document.getElementById("player2").value
    localStorage.setItem("playerr1", jogador1)
    localStorage.setItem("playerr2", jogador2)
    window.location = "index2.html"
}

