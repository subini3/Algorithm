const arr = [130, 135, 148, 140, 145, 150, 150, 153];

sol = (a) => {
    let answer = 1;
    let max = a[0];
    for(let i of a){
        if(i > max){
            answer++;
            max = i;
        } 
    }
    console.log(answer)
}
sol(arr)