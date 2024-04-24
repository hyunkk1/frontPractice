
const date = new Date();
const date3 = new Date("2024/08/31/09:00:00");
let now = date.getTime(); // 현재 시간 기준으로 경과 시간을 가져옴
let dDay = date3.getTime(); // 수료일 기준으로 경과 시간을 가져옴

const timegap = dDay - now;
const final = parseInt(timegap / (1000 * 60 * 60 * 24));
console.log("수료까지 남은날짜 : ", final, "일");
document.querySelector('.accent').innertext = final;

