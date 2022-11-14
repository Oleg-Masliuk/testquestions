const n=7
const ar=[10, 20, 20, 10, 10, 30, 50, 10, 20]

    const result =[]
    let answer =0
ar.forEach((element, index, ar) => {
    result.push(ar.filter(num =>(ar[index]==num)&&(ar[index]!==undefined)))
    let test = ar[index]
    ar.forEach((element, index, ar)=>{if(element==test){ar[index]=undefined}} )})
    for (let i=0; i<result.length; i++){
        answer=answer+Math.trunc(result[i].length/2)
        
    }
   return (answer)


    
    
  