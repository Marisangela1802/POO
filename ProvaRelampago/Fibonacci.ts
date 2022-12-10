let num1 = 1
let num2 = 1
let num3 = 1
let tem = 58
let contador = 0

for (let i =1; i < tem; i++ ){
    num1 = num2 + num3
    num2 = num3
    num3 = num1
    if(tem == num1){
        console.log("Tem na lista")
        contador = 0;
        break;
    }else if(tem != num1){
        contador++
    }
    
}
if(contador!=0){
    console.log("Não tem na lista")
}

/*
let a:number = 0
let b:number = 1
let c:number
let x:number = 12678

for(let i =0; i<50; i++){

  c = a + b
  if(c == x){
      console.log("Sim, faz parte na posição" + i)
      break
} else if(c>x){
      console.log("Não faz parte da série. O c é igual a" + c + " na posição" + i)
      break
}
  console.log(c)
  a = b
  b = c

}

for(let i = 0; ;i++) ---> Loop infinito

--------------------------------------------------------------------------------------------

do{
    c = a + b
    if(c == x){
        console.log("Sim, faz parte")
    }else if(c>x){
        console.log("Não faz parte")
    }else{
        a = b
        b = c
    }
}while(c < x)
*/