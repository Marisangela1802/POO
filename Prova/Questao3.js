var JokenPoV2;
(function (JokenPoV2) {
    JokenPoV2[JokenPoV2["ESCUDO"] = 1] = "ESCUDO";
    JokenPoV2[JokenPoV2["MARTELO"] = 2] = "MARTELO";
    JokenPoV2[JokenPoV2["TRIDENTE"] = 3] = "TRIDENTE";
})(JokenPoV2 || (JokenPoV2 = {}));
function jogo(jogador1, jogador2) {
    if (jogador1 == jogador2)
        return "Empate";
    if (jogador1 == JokenPoV2.ESCUDO && jogador2 == JokenPoV2.MARTELO)
        return "Jogador 1 ganhou";
    else if (jogador1 == JokenPoV2.MARTELO && jogador2 == JokenPoV2.TRIDENTE)
        return "Jogador 1 ganhou";
    else if (jogador1 == JokenPoV2.TRIDENTE && jogador2 == JokenPoV2.ESCUDO)
        return "Jogador 1 ganhou";
    else
        return "Jogador 2 ganhou";
}
console.log(jogo(JokenPoV2.MARTELO, JokenPoV2.ESCUDO));
