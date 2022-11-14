const s =[ 2, 2, 1, 3, 2 ]
const d =4
const m = 2
const birthday = (s, d, m) =>{
    let result=0
    s.forEach((element, index, s) => {
        let summa =0
        for (let i =index; (i-index)<m; i++) {
            summa=summa+s[i]          
    }
    if (summa==d){result++}    
})
return result
}
console.log(birthday(s, d, m))