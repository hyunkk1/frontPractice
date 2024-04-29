// ES5 : 2009년에 발표된 버전, 주로 바닐라 자바스크립트에서 언급되는 버전
// JSON 객체 : 서버와 프론트엔드간의 데이터를 교환하기 위해 사용되는 경량 데이터 형식
let data = '{"name":"John", "age":30}';
let obj = JSON.parse(data);
console.log(obj.name); // "John"
console.log(JSON.stringify(obj)); // "{"name":"John","age":30}"

// Array 메소드 : 
const numbers = [1,2,3,4,5,6,7,8,9,10];

// 배열의 요소를 순회 할 때 사용, 배열의 내용을 변경할 수 없음, 무조건 전체 순회
// numbers.forEach(e => console.log(e));

// map() : 배열의 모든 요소를 순회하면서 새로운 배열을 만듬
const squares = numbers.map(e => e * e);
// console.log(squares);

// filter() : 배열의 요소 중 조건을 만족하는 요소만 추출해 새로운 배열 생성
const even = numbers.filter(e => e % 2 == 0);

// reduce() : 배열의 모든 요소를 순회하여 대입되는 값을 소모하면서 누적 해 나가는것
const sum = numbers.reduce((e1, e2) => e1 + e2, 0);
console.log(sum);

