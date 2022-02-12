const N = 7;
const numbers = [128, 460, 603, 40, 521, 137, 123];

// function sol(n,num){
//     let answer = 0;
//     let max = 0;
//     for(let x of num) {
//         let sum = 0;
//         let tmp = x;
//         while(tmp){
//             sum += (tmp%10);
//             tmp = Math.floor(tmp/10);
//         }
//         if(sum > max){
//             max = sum;
//             answer = x;
//         } else if( sum === max){
//             answer = Math.max(x);
//         }
//     }
        
    
//     return answer;
// }

// console.log(sol(N,numbers));

function sol(n,num){
    let answer = 0;
    let max = 0;
    for(let x of num) {
        let sum = x.toString().split('').reduce((a,b) => a+ (+b), 0)
        if(sum > max){
            max = sum;
            answer = x;
        } else if( sum === max){
            answer = Math.max(x);
        }
    }
    return answer;
}

console.log(sol(N,numbers));