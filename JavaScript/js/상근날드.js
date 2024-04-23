let menu = [];
menu[0] = Number(prompt("상덕버거 : ", ""));
menu[1] = Number(prompt("중덕버거 : ", ""));
menu[2] = Number(prompt("하덕버거 : ", ""));
menu[3] = Number(prompt("콜라 : ", ""));
menu[4] = Number(prompt("사이다 : ", ""));

let minB = menu[0];
let minD = menu[3];
for (let i = 0; i < menu.length; i++) {
  if (i < 3 && minB > menu[i]) minB = menu[i];
  if (i > 2 && minD > menu[i]) minD = menu[i];
}
document.getElementById("value").innerHTML = minD + minB - 50 + "원";
