
const str = 'teachermode';
const t = 'e';

sol = (s, t) => {
    let answer = [];
    let p = 1000;
    for(let i of s){
        if(i === t){
            p = 0;
            answer.push(p);
        } else{
            p++;
            answer.push(p);
        }
    }
    p = 1000;
    for(let x = s.length -1; x >=0; x--){
        if(s[x] === t){
            p = 0;
        } else {
            p++;
            answer[x] = Math.min(answer[x], p);
        }
    }
    return answer;
}
console.log(sol(str, t))