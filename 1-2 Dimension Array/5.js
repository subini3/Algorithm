//1 :맞음 2:틀림
const N = 10
const A = [1, 0, 1, 1, 1, 0, 0, 1, 1, 0];


sol = (n, a) => {
    let answer = 0;
    let sum = 0;
    for(let i = 0; i < N ; i++){
        if(A[i] === 1){
            sum ++;
            answer += sum;
        } else{
            sum = 0;
        }
    }
    console.log(answer)
}
sol(N,A)