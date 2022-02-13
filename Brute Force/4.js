const budget = [5, 28];
const gift = [[6, 6],[2, 2],[4, 3],[4, 2],[10, 3]];
// 3 + 6 + 7 + 12 = 28
function sol(budget, gift){
    let answer = 0;
    let tmp = [];
    gift.sort((a,b) => (a[0]+a[1]) - (b[0]+b[1]));
    for(let i = 0; i< budget[0]; i++){
        let money = budget[1] - (gift[i][0]/2 + gift[i][1]);
        let cnt = 1;
        for(let j = 0; j < budget[0]; j++){
            if(i !== j && gift[j][0]+ gift[j][1] > money) break;
            if(i !==j && gift[j][0]+ gift[j][1] <= money){
                money -= (gift[j][0] + gift[j][1]);
                cnt ++;
            }
            answer = Math.max(answer, cnt);
        }
        
    }
    console.log(tmp);
    return answer;

}

console.log(sol(budget, gift));