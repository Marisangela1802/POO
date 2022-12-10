//media = ira-aluno dividido pelo numeo de alunos
//ira = ira_aluno é menor ou maior ao ira da turma, se for menor imprimir nome do aluno
/*
let vetor = (alunos:[string,number][]):string[] => {
    
    let media:number = 0
    let res:string[] = []

    for(let i=0; i<alunos.length; i++){
        media = media + alunos[i][1]
    }

    media = media/alunos.length
    console.log(media)

    for(let i = 0; i<alunos.length; i++){

        if(alunos[i][1]>media) res = [(alunos[i][0])]
    }

    return res

}

let alunos:[string,number][]
alunos =[
    ["Marco", 5],
    ["Gabriel", 6],
    ["Maria", 8],
    ["Mary", 10]
    
]


console.log(vetor(alunos))

*/

const questa07 = (alunos:[string,number][]):string[] => {
    let media:number = 0
    let res:string[] = []
    for(let i=0;i<alunos.length;i++){
        media += alunos[i][1]
    }
    media = media/alunos.length
    console.log(media)

    for(let i=0;i<alunos.length;i++){
        if(alunos[i][1]>=media) res.push(alunos[i][0])
    }

    return res
}
//          [0     ,   1  ]
let alunos: [string,number][];

alunos = [
    ["Jefferson",4.5],
    ["Maria",9],
    ["Vivian",5.2],
    ["Gabriel",7.0],
    ["Wladimir",10]
]

console.log(questa07(alunos))

