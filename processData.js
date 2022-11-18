

const arr = input.split("")
arr.splice(0, 4)
arr.forEach((elem, index, arr) => {
    if (elem==" "){arr.splice(index, 1)}
})
arr.sort((a, b) => {return (a-b)})
const i = (arr.length+1)/2-1
const arr1 = arr.slice(i, arr.length).reverse()
const arr2 = arr.slice(0, i)
const result = arr2.concat(arr1)

console.log(result.join(" "))
