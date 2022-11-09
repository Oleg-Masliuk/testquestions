const arr = [3, "11 2 4", "4 5 6", "10 8 -12"]
const result = (arr)=>{
let a =Number(0)
let b=Number(0)
    for (let i =1; i<=arr[0]; i++){
        arr[i]=arr[i].split(" ")
    } 

    for (let i=1; i<=arr[0]; i++){
            a = Number(a)+Number(arr[i][i-1])
            b= Number(b)+Number(arr[i][arr[0]-i])
        };
        let diff = Math.abs(a-b)
return diff}

