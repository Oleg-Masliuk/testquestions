const arr = [1, 9, 5, 4, 8]
arr.sort((a, b) => a-b)
const mini = (arr)=>{
    let mini=0
    for(let i=0; i<4; i++) {
        mini = mini+arr[i]
    }
    return mini
}
const max = (arr)=>{
    let max=0
    for(let i=1; i<5; i++) {
        max = max+arr[i]
    }
    return max
}
console.log(mini(arr), max(arr))
/*2 
const arr = [1, 9, 5, 4, 8]
const initialValue = 0;
const suma = (sortArr) => {return sortArr.slice(0,4).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );}
const arrMin = (arr)=>(arr.sort((a, b) => a-b))
const arrMax = (arr)=>(arr.sort((a, b) => b-a))
 const min = suma(arrMin(arr))
 const max = suma(arrMax(arr))
 console.log(min, max)

 3
const arr = [1, 9, 5, 4, 8]
const initialValue = 0;
const min = (arr)=> {return arr.sort((a, b) => a-b).slice(0,4).reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);}

const max = (arr)=> {return arr.sort((a, b) => b-a).slice(0,4).reduce(
    (previousValue, currentValue) => previousValue + currentValue,
    initialValue
  );}
  console.log(min(arr), max(arr))*/

