//1 : 가위, 2 : 바위, 3 : 보
const N = 5
const A = [2, 3, 3, 1, 3];
const B = [1, 1, 2, 2, 3];
// 가위일때 이기면 -2
// 가위일때 지면 -1
// 바위일때 이기면 1
// 바위일때 지면 -1
// 보일때 이기면 1
// 보일때 지면 2

sol = (n, a, b) => {
    let answer = [];
    for(let i = 0; i < N ; i++){
        if((a[i]-b[i]) === -2 || (a[i]-b[i]) === 1){
            answer.push('A')
        } else if(a[i] === b[i]){
            answer.push('D')
        } else{
            answer.push('B')
        }
    }
    console.log(answer)
}
sol(N,A,B)