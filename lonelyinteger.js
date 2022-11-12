const arr = [1, 2, 3, 4, 3,2, 1];
const result = (a)=>{
a.sort((a,b)=>{return a-b})
const aFiltr = a.map((num, i, a) => {if (i%2!=0) return num - a[i-1]; else return num-a[i+1]}) 
const indexFind=aFiltr.findIndex((element) => (element!==0))
const result=a[indexFind]
return(result)}
console.log(result(arr))