

sol = (arr) => {
    let answer = [];
    let sum = 0;
    for(let i of arr){
        if(i%2 === 1){
            sum+= i;
            answer.push(i);
        }
    }
    console.log(sum);
    console.log(Math.min(...answer));
}
let arr = [12,77,38,41,53,92,85];

sol(arr);

