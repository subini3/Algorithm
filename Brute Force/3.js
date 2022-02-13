const studentsTest = [4, 3];
const rank = [[3, 4, 1, 2],[4, 3, 2, 1],[3, 1, 4, 2],];

function solution(stuTest, test){
    let answer = 0;
    for(let i =1; i <= stuTest[0]; i++){
        for(let j = 1; j <= stuTest[0]; j++){
            let cnt = 0;
            for(let k = 0; k < stuTest[1]; k++){
                let pi = pj = 0;
                for(let s = 0; s < stuTest[0]; s++){
                    if(test[k][s] === i) pi = s;
                    if(test[k][s] === j) pj = s;
                }
                if(pi < pj) cnt++;
            }
            if(cnt === stuTest[1]) answer ++;
        }
    }
    return answer;
}

console.log(solution(studentsTest, rank));