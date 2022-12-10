var JokenPo;
(function (JokenPo) {
    JokenPo["PEDRA"] = "PEDRA";
    JokenPo["PAPEL"] = "PAPEL";
    JokenPo["TESOURA"] = "TESOURA";
})(JokenPo || (JokenPo = {}));
function jogo(jogador1, jogador2) {
    if (jogador1 == jogador2)
        return "Empate";
    if (jogador1 == JokenPo.PAPEL && jogador2 == JokenPo.PEDRA)
        return "Jogador 1 ganhou";
    else if (jogador1 == JokenPo.PEDRA && jogador2 == JokenPo.TESOURA)
        return "Jogador 1 ganhou";
    else if (jogador1 == JokenPo.TESOURA && jogador2 == JokenPo.PAPEL)
        return "Jogador 1 ganhou";
    else
        return "Jogador 2 ganhou";
}
console.log(jogo(JokenPo.PEDRA, JokenPo.PAPEL));
