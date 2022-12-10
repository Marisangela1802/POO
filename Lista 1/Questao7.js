//media = ira-aluno dividido pelo numeo de alunos
//ira = ira_aluno é menor ou maior ao ira da turma, se for menor imprimir nome do aluno
var vetor = function (alunos) {
    var media = 0;
    var res = [];
    for (var i = 0; i < alunos.length; i++) {
        media = media + alunos[i][1];
    }
    media = media / alunos.length;
    console.log(media);
    for (var i = 0; i < alunos.length; i++) {
        if (alunos[i][1] > media)
            res = [(alunos[i][0])];
    }
    return res;
};
var alunos;
alunos = [
    ["Marco", 5],
    ["Gabriel", 6],
    ["Maria", 8],
    ["Mary", 10]
];
console.log(vetor(alunos));
