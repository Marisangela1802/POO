enum JokenPo {
    PEDRA = "PEDRA",
    PAPEL = "PAPEL",
    TESOURA = "TESOURA"
}

function jogo(jogador1:JokenPo, jogador2:JokenPo):string{
    if(jogador1 == jogador2) return "Empate"

    if(jogador1 == JokenPo.PAPEL && jogador2 == JokenPo.PEDRA ) return "Jogador 1 ganhou"
    else if(jogador1 == JokenPo.PEDRA && jogador2 == JokenPo.TESOURA) return "Jogador 1 ganhou"
    else if (jogador1 == JokenPo.TESOURA && jogador2 == JokenPo.PAPEL) return "Jogador 1 ganhou"
    else return "Jogador 2 ganhou"
}

console.log(jogo(JokenPo.PEDRA,JokenPo.PAPEL));