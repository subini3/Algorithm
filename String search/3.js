
// const str = 'g0en2T0s8eSoft'

// sol = (s) => {
//     let answer = "";
//     for(let i of s){
//         if(!isNaN(i)){
//             answer += i;
//         }
//     }
//     return parseInt(answer);
// }
// console.log(sol(str))

const str = 'g0en2T0s8eSoft'

sol = (s) => {
    let answer = 0;
    answer=parseInt(s.replace(/[^0-9]/g, ''));
    return answer;
}

console.log(sol(str))