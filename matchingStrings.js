const strings =['acv', 'gtr', 'cvd'];
const queries =['cvd', 'ddd', 'gtr'];
const result=[];


queries.forEach((str)=>{
result.push(strings.filter(word => word==str).length)
})
return (result)

