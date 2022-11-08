const a = [1];
console.log(a[0])
const result = (a)=>{
    if (a.lenght==1) return (a[0])
    else{
const aSort = a.sort((a,b)=>{return a-b})
const aFiltr = a.map((num, i, a)=>{if (i%2!==0) return num-a[i-1]})
const indexFind=aFiltr.findIndex((element) => (element!==undefined&&element!==0))
const result=aSort[indexFind-1]
return(result)}
}


console.log(result(a))