const a = 'BANANA'

sol = (a) => {
    let answer = '';
    for(let i of a){
        if(i === 'A'){
            answer+= '#'
        } else {
            answer+= i
        }
    }
    console.log(answer)
}
sol(a);


const b = 'LALALA'
sol = (b) => {
    let answer = b.replace(/A/g , '#');
    console.log(answer);
}
sol(b);
