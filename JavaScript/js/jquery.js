const el = document.querySelector("#myelement").innerHTML;
console.log(el);

const els = document.querySelectorAll(".myEls");

for (let e of els) {
  console.log(e.innerHTML);
};

// jQuery 스타일로 변경하기
const $el = $("#myelement");
console.log($el.text());
console.log($el.css("background-color"));

const $els = $(".myEls");
console.log($els);
