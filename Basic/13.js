const a = 'ItisTimeToStudy'

sol = (a) => {
    let answer = '';
    for(let i of a){
        if(i === i.toLowerCase()){
            answer += i.toUpperCase();
        } else{
            answer += i;
        }
    }
    console.log(answer);
}
sol(a);
