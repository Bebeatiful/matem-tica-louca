jogador1 = ""
jogador2 = ""
jogador1Score = 0
jogador2Score = 0
getAnswer = 0
questionTurn = "player1"
answerTurn = "player2"
getResposta = ""

jogador1 = localStorage.getItem("playerr1")
jogador2 = localStorage.getItem("playerr2")
document.getElementById("jogador11").innerHTML = jogador1 + ": "
document.getElementById("jogador22").innerHTML = jogador2 + ": "
respota = parseInt(number1) * parseInt(number2)

function send(){
    number1 = document.getElementById("number1").value
    number2 = document.getElementById("number2").value
    resposta = parseInt(number1) * parseInt(number2)
    document.getElementById("questao").innerHTML = number1 + "X" + number2
    document.getElementById("number1").innerHTML = ""
    document.getElementById("number2").innerHTML = ""
}
function checou(){
    getResposta = document.getElementById("respostar").value
    if(getReposta == resposta){
        if(answerTurn = "player1"){
            player1Score = player1Score + 1
            document.getElementById("jogador11").innerHTML = jogador1 + ": " + player1Score
            document.getElementById("res").innerHTML = "Turno de resposta de: " + jogador2
        }
        else{
            player2Score = player2Score + 1
            document.getElementById("jogador22").innerHTML = jogador2 + ": " + player2Score
            document.getElementById("res").innerHTML = "Turno de resposta de: " + jogador1
        }
    }
    if(questionTurn ==   "player1"){
        questionTurn = "player2"
        document.getElementById("per").innerHTML = "Turno de pergunta de: " + jogador2
    }
    else{
        questionTurn = "player1"
        document.getElementById("per").innerHTML = "Turno de pergunta de: " + jogador1
    }
}