
function showDetail() {
  document.getElementById("itzy").style.display = "block";
  document.getElementById("open").style.display = "none"; // 상세 설명 보기 버튼 숨기기
}

function hideDetail() {
  document.getElementById("itzy").style.display = "none";
  document.getElementById("open").style.display = "block"; // 상세 설명 보기 버튼 보이기
}

document.getElementById("open").addEventListener("click", showDetail);
document.getElementById("close").addEventListener("click", hideDetail);