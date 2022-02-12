
const N = 9;
const numbers = [32, 55, 62, 20, 250, 370, 200, 30, 100];


function sol(n,num){
    let answer = [];
    let reversenumbers = [];
    for(let i of num){
        let re = parseInt(i.toString().split('').reverse().join(''));
        reversenumbers.push(re)
}
    answer = reversenumbers.filter(num => {
        if(num === 1) return false;
        for(let j = 2; j <=Math.sqrt(num); j ++){
            if(num%j === 0) return false
        }    
        return true;
    })
    return answer;
}

console.log(sol(N,numbers));


