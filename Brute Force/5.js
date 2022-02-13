const cards = [10, 3];
const numbers = [13, 15, 34, 23, 45, 65, 33, 11, 26, 42];

function sol(c,n){
    let answer = 0;
    let sum = new Set();
    
    for(let i = 0; i < c[0]; i++){
            for(let j = i+1; j< c[0]; j++){
                    for(let k = j+1; k < c[0]; k++){
                        sum.add(n[i]+n[j]+n[k])
                    }
                }
            }
    let a = Array.from(sum).sort((a,b) => b-a);
    answer = a[c[1]-1]
    return answer;
}


console.log(sol(cards, numbers));