const n =6;
const p =5;
const book =[];
let i=0
while (i<=n) {
   book.push([i, i+1]) 
   i=i+2
} 
const result =book.indexOf(book.find((element)=>(element[0]==p)||(element[1]==p)))

if (book.length-result>result) {return(result) }

else {return (book.length-result-1)}

