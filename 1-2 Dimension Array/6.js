const N = 5;
const score = [83, 89, 92, 100, 76];

sol = (n, sc) =>{
    let answer = Array.from({length:n}, () => 1);
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(sc[i] < sc[j]){
                answer[i] ++;
            }
        }
    }
    console.log(answer);
}
sol(N,score);