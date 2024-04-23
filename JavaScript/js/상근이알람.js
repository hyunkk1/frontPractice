let hour = prompt("시간 입력 : ", "");
hour = Number(hour); // 프롬프트 입력을 받으면 String type임
let min = prompt("분 입력 : ", "");
min = Number(min);
let calc = hour & 60 + min;
if(calc < 45) calc = 24 * 60 + min;
calc -= 45;
document.write("<h2>" + `${parseInt(calc / 60)}시 ${calc% 60}분` + "</h2>");
