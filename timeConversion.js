

const timeAnswer = s =>{
    let time =[s.split("").slice(0,2).join(""), s.split("").slice(3,5).join(""), s.split("").slice(6,8).join(""), s.split("").slice(8, 10).join("")]
    switch (time[3]) {
        case "PM":if (time[0]==12) {return(time.splice(0,3).join(":"))}
                    else {time[0]=Number(time[0])+12; return(time.splice(0,3).join(":"))}
            break;
        case "AM":if (time[0]==12) {time[0]="00"; return(time.splice(0,3).join(":"))}
                    else {return(time.splice(0,3).join(":"))}
            break; 
    }
}
console.log(timeAnswer ("19:05:45PM"))
