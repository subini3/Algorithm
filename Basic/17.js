// const str = 'ksekkset'

// sol = (str) => {
//     let answer = '';
//     for(let i = 0; i <= str.length; i++){
//         if(str.indexOf(str[i]) === i){
//             answer += str[i];
//         }
//     }
//     console.log(answer);
// }
// sol(str);

const str = ['ksekkset', 'ksekkset', 'ksekkset', 'ss']

sol = (str) => {
    let answer = '';
    for(let i of str){
        if(!answer.includes(i)){
            answer += i;
        }
    }
    console.log(answer);
}
sol(str);

