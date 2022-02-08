const Question = [5,3,7,11,2,15,17]
solution = (Question) => {
    min = Question[0];
    for(let i = 1; i < Question.length; i++){
        if(Question[i] < min){
            min = Question[i];
    }
}   
    return min;
};
console.log(solution(Question));

//Math. 연습     위 코드와 같음
const Arr = [5,3,7,11,2,15,17]
solution = (Arr) => {
    let answer = Math.min(...Arr) // 전개연산자(spread Operator)...은 배열을 펼쳐줌 (Arr[0], Arr[1] ....., Arr[6]) Math는 인자를 넣어야함 배열 객체는 안됨. 

    return min;
};
console.log(solution(Arr));

//함수가 필요 없으니 더 줄이면

const arr = [5,3,7,11,2,15,17];
console.log(Math.min(...arr));