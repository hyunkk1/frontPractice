// jQuery 방식

// let colorBtn = document.getElementById("colorButton");
// const colors = ["red", "orange", "yellow", "green", "blue", "navy", "purple"];
// let colorIdx = 0;

// colorBtn.addEventListener("click", () => {
//   document.body.style.backgroundColor = colors[colorIdx];
//   colorIdx = (colorIdx + 1) % colors.length;
// });


// JS 코드
var colorButton = document.getElementById("colorButton");
var colors = ["red", "orange", "yellow", "green", "blue", "purple"];
var colorIndex = 0;

colorButton.addEventListener("click", function() {
  document.body.style.backgroundColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
});