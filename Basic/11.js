const a = 'COMPUTERPROGRAMMING'
const b = 'R'

sol = (a, b) => {
    let answer = 0;
    for(let i of a){
        if(i === b){
            answer ++
        }
    }
    console.log(answer)
}
sol(a,b);