// 함수 선언문 : function 키워드로 선언하며 한수 이름을 가짐, 호이스팅에 영향을 받음

function sum(p1, p2) {
  return p1 + p2;
}
let sum1 = sum(21, 24);
console.log(sum1);

// 함수 표현식 : 변수에 함수를 할당해서 사용하는 방식, 호이스팅에 영향을 받지 않음
// 익명의 함수로 만드는 방식 : const 변수명 = function() {};
// 네이밍 함수로 만드는 방식 : conse 변수명 = function 함수이름(){};
const a = function(x) {;
  for(let i = 1; i < 10; i++) {
    console.log(`${x} x ${i} = ${x * i}`);
  }
};

// 화살표 함수 // 화살표 = 리액트의 핵심 문법
const a2 = x => {
  for(let i = 1; i < 10; i++) {
    console.log(`${x} x ${i} = ${x * i}`);
  }
}
// a(3);
// a2(5);

// 기본값 할당 :
function sum10(a = 10, b = 20) {
  console.log(a + b);
  sum10(100);
}

