const str = ['good', 'time', 'good', 'time', 'student']

sol = (str) => {
    let answer = '';
    for(let i of str){
        if(!answer.includes(i)){
            answer += i +'\n';
        }
    }
    console.log(answer);
}
sol(str);



let st = ['good', 'time', 'good', 'time', 'student']
solution = (s) => {
    let answer = '';
    answer = Array.from(new Set(s)) //Array.from -> 새로운 배열 생성, new Set 중복 자르기
    //answer = [...new Set(s)];
    return answer;
};
console.log(solution(st));
