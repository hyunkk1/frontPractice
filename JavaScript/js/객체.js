// 자바스크립트에서는 원시타입을 제외한 모든 값이 객체 이다.
// 객체리터럴은 중괄호를 사용해서 만드며, 속성(property)와 값(value)의 쌍으로 구성
const person = {
  name: "안유진",
  age: 21,
  addr: "서울시 강남구 청담동",
  group: "아이브",
  desc: function() {
    return ("아이브는 5인조");
  }
};
console.log(person.name);
console.log(person.age);
console.log(person["addr"]);
console.log(person["group"]);
console.log(person.desc());