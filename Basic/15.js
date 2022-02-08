let str = ["teacher", "time", "student", "beautiful", "good"];
let Number = 5

sol = (s,n) => {
    let answer = '';
    for(let i of s){
        if(i.length > answer.length){
            answer = i;
        }
    }
        console.log(answer)
  }

sol(str,Number)
