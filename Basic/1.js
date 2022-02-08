solution = (a, b, c) => {
    let answer = 0;
    if (a < b){
        answer = a;
    } else{
         answer = b;
    } if (c < answer){
        answer = c;
    }
    return answer;
}

console.log(solution(6,5,11));


let number = [6, 5, 11];
sol = (s) =>{
    let answer = Math.min(...s)
    return answer;
} 
console.log(sol(number))