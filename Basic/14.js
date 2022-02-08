const a = 'StuDY'

sol = (a) => {
    let answer = '';
    for(let i of a){
        if(i === i.toUpperCase()){
            answer += i.toLowerCase()
        } else {
            answer += i.toUpperCase()
        }
    }
    console.log(answer);
}

sol(a);