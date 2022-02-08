solution = (a, b, c) => {
  let answer, max;
  let sum = a+b+c;
  if(a < b){
      max = b;
  } else max = a;
  if(max < c){
      max = c;
  }
  if((sum - max) > max){
      answer = 'YES'
  } else {
      answer = 'NO'
  }
  return answer;
}
console.log(solution(13,37,17))



sol = (a,b,c) => {
    let answer = '';
    let sum = a + b + c;
    let max = Math.max(a,b,c)
    if((sum - max) < max ){
        answer = 'No';
    } else {
        answer = 'Yes';
    }
    return answer
}
console.log(sol(13,20,17))