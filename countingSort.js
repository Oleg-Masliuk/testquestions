const arr =[1, 1, 3, 2, 1]

let result = []
for (let i = 0; i < 100; i++) {
    result[i]= arr.filter(element=>element==i).length 
    a = result.join(" ")
}

console.log(a)
