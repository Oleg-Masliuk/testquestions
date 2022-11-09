let s ="We promptly judged antique ivory buckles for the next prize";
let arr = s.toLocaleLowerCase().split("").sort();
let arrNew = arr.filter(element => element!==" ")
let result =0
arrNew.forEach((element, index, arr) => { 
    if (element!==arr[index+1]){result++}   
});
if (result==26){return("pangram")}
else {return("not pangram")}

