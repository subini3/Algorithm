
solution = (Talls) => {
    let answer = Talls;
    let sum = Talls.reduce((a, b) => a+b, 0);  // reduce 는 결과값 출력 a+b니까 다 더한 값 출력
    for(let i= 0; i<8; i++){
        for(let j=1; j<9; j++){
            if((sum - (Talls[i]+Talls[j])) === 100){
                Talls.splice(j, 1);
                Talls.splice(i, 1);
            }
        }
    }
        return answer;
};
let Talls = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(Talls));