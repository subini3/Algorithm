// const str = 'gooooG'

// sol = (s) => {
//     let answer = 'Yes';
//     s = s.toLowerCase();
//     let len = Math.floor(s.length / 2);
//     for(let i = 0; i < len; i++){
//         if(s[i] !== s[s.length-i-1]){
//             return 'No';
//         }
//     }
//     return answer;
// }

// console.log(sol(str))

const str = 'godsaoG'

sol = (s) => {
    let answer = 'Yes'
    if(s.toLowerCase().split('').reverse().join('') !== s.toLowerCase()){
        return 'No'
    }
    return answer;
}

console.log(sol(str));