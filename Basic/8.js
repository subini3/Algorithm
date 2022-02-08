const day = 3;
const car = [25,23,11,47,53,17,33]

sol = (day, car) => {
    let answer = 0;
    for(let i of car){
        if(i%10 === day){
            answer++;
        }
    }
    console.log(answer)
}

sol(day,car)



