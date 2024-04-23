// // 스코프 : 변수나 함수가 영향을 미치는 범위
// // 전역 스코프 : 함수 외부에 선언되어 파일 전체에 영향을 줌
// let a = 10;
// function sum() {
//   console.log(`함수 내부: ${a}`);
// }
// sum();
// console.log(`함수 외부 : ${a}`);

// 지역 스코프
// function sum() {
//   console.log(`함수 내부 : ${a}`);
//   let a = 10;
// }
// sum();
// console.log(`함수 외부 : ${a}`);

// 블록 스코프 : 자바스크립트는 원래 함수 스코프를 따르는 언어 였지만,
// ES6 에서 블록스코프를 지원하는 let, const가 추가됨

// let a = 10;
// {
//     var b = 20;
//     console.log(`코드 블록 내부 a : ${a}`);
//     console.log(`코드 블록 내부 b : ${b}`);
// }
// console.log(`코드 블록 외부 a : ${a}`);
// console.log(`코드 블록 외부 b : ${b}`);

// 참조 우선 순위
// let a = 10;
// const b = 20;
// function sum20() {
//   let a = 50;
//   const b = 70;
//   console.log(`함수 내부 a : ${a}`);
//   console.log(`함수 내부 b : ${b}`);
// }
// console.log(`함수 외부 a : ${a}`);
// console.log(`함수 외부 b : ${b}`);

// 즉시 실행 함수 : 함수를 정의하자마자 바로 실행하는 함수
(function() {
  width = 500;
  height = 300;
  console.log(`너비 : ${width}, 높이 : ${height}`);
  init();
})();

function init() {
  console.log("프로그램 실행을 위해 초기화 중")
}










