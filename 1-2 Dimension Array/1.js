const arr = [7, 3, 9, 5, 6, 12];

sol = (a) => {
    let answer = [];
    answer.push(a[0]);
    for(let i = 1; i < a.length; i++){
        if(a[i] < a[i+1]){
            answer.push(a[i+1])
        } 
    }
    
    console.log(answer)
}
sol(arr)