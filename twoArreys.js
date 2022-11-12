const k = 5
const A = [1, 2, 2, 1]
const B = [3, 3, 3, 4]
const twoArrays = (k, A, B) =>{
    A.sort((a, b) => {return a-b})
    B.sort((a,b) => {return b-a})
    let result = true
    A.forEach((element, index) => {
        if (element+B[index]<k){result = false}
    });
    if (result) {return "YES"}
    else return "NO"
  
}

console.log(twoArrays(k, A, B))