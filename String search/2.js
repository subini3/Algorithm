// const str = 'found7, time: study; Yduts; :emit ,7Dnuof'

// sol = (s) => {
//     let answer = 'Yes';
//     s = s.toLowerCase().replace(/[^a-z]/g, '');;
//     let len = Math.floor(s.length / 2);
//     for(let i = 0; i < len; i++){
//         if(s[i] !== s[s.length-i-1]){
//             return 'No';
//         }
//     }
//     return answer;
// }

// console.log(sol(str))

const str = 'found7, time: study; Yduts; :emit ,7Dnuof'

sol = (s) => {
    let answer = 'Yes'
    s=s.toLowerCase().replace(/[^a-z]/g, ''); //replace(정규식표현) ^는 부정을 뜻함 a-z까지가 아닌것을 g에서 찾아서 ''로 바꿈
    if(s.split('').reverse().join('') !== s){  // split 잘라서 .reverse 뒤집어서 . join 붙임
        return 'No'
    }
    return answer
}
console.log(sol(str))