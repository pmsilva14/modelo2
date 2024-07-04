function horadodia() {
    var mensagem = document.getElementById("texto")
    var foto = document.getElementById("foto")
    var data = new Date()
    var hora_atual = data.getHours()
    mensagem.innerText = `Agora são ${hora_atual} horas!`
    
    if (hora_atual >= 0 && hora_atual < 12) {
        foto.src = 'foto_manha1.png'
        window.document.body.style.background = '#d1b15a'
    } else if (hora_atual >= 12 && hora_atual < 18) {
        foto.src = 'foto_tarde1.png'
        window.document.body.style.background = '#e9987e'
    } else {
        foto.src = 'foto_noite1.png'
        window.document.body.style.background = '#070c15'
    }

}