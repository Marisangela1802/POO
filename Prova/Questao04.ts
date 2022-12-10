const vetor = (alunos:[string,number][]):string[] => {
    let aprv:string[] = []

    for(let i=0;i<alunos.length;i++){
        if(alunos[i][1]>6) aprv.push(alunos[i][0])
    }

    return aprv
}

let alunos: [string,number][];

alunos = [
    ["Jefferson",4.5],
    ["Lazaro",5.2],
    ["Gabriel",7.0],
    ["Vivian",10]
]

console.log(vetor(alunos))