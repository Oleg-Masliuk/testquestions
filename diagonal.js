const arr = [ [ 11, 2, 4 ], [ 4, 5, 6 ], [ 10, 8, -12 ] ]
let a =Number(0)
let b=Number(0)
for (let i=0; i<arr.length; i++){
        a = Number(a)+Number(arr[i][i])
        b= Number(b)+Number(arr[i][arr[i].length-i-1])
        console.log(a, b)
        };
let diff = Math.abs(a-b)
return (diff)

