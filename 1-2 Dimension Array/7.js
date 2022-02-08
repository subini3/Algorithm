const N = 5;
const arr=[[10, 13, 10, 12, 15], 
           [12, 39, 30, 23, 11],
           [11, 25, 50, 53, 15],
           [19, 27, 29, 37, 27],
           [19, 13, 30, 13, 19]];

sol = (n, a) => {
    let answer = 0;
    let sum1=sum2=0;
    for(let i = 0; i < n; i++){
        sum1 = sum2 = 0;
        for(let j = 0; j < n; j++){
            sum1 += a[i][j];
            sum2 += a[j][i];
        } answer = Math.max(answer, sum1, sum2);
    } sum1 = sum2 = 0;
    for(let i = 0; i < n; i++){
        sum1 += a[i][i];
        sum2 += a[i][n-i-1];
    } answer = Math.max(answer, sum1, sum2);
    console.log(answer);
}
sol(N, arr);

