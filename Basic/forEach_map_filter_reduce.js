//forEach, map, filter, reduce

// function forEach(predicate, thisArg){
//     for(let i = 0; i<a.length; i++){
//         predicate(a[i], i)
//     }
// }

a = [10,11,12,13,14,15];
a.forEach(function(v, i){
    console.log(v, i, this);         // v 요소 i 인덱스   10 0 / 11 1 / 12 2 / 13 3 //// 이렇게 나옴
}, [1, 2]);                   // this 는 [1,2] 로 나옴

let answer = a.map(function(v, i){       //map은 새로운 메서드 생성 원래 배열과 길이는 동일
    if(v%2 === 0);{                 // 짝수만 가져오면 홀수자리는 undefined로 되버림 인덱스는 동일
        return v;
    }
}, [1,2]);
console.log(answer);

let answer = a.filter(function(v, i){       //fliter는 참인 요소만 새로운 배열로 생성함
    return v%2 ==0;
}, [1,2]);
console.log(answer);

let answer = a.reduce(function(acc, v){       //reduce는 누적됨
    return acc+v;
}, 0);
console.log(answer);