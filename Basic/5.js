const a = [5,3,7,11,2,15,17]

solution = (a) => {
    let answer = Math.min(...a)
    return answer;
} 
console.log(solution(a));