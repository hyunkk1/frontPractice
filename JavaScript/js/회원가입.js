document.addEventListener("DOMContentLoaded", function () {
  const inputs = {
    id: document.getElementById("id"),
    password: document.getElementById("password"),
    email: document.getElementById("email"),
    tel: document.getElementById("tel"),
  };
  const checks = {
    id: document.getElementById("idCheck"),
    password: document.getElementById("pwCheck"),
    email: document.getElementById("emailCheck"),
    tel: document.getElementById("telCheck"),
  };
  const button = document.getElementById("submitButton");

  const regex = {
    id: /^\w{8,20}$/,
    password: /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,25}$/,
    email: /^([a-z]+\d*)+(\.?\w+)+@\w+(\.\w{2,3})+$/,
    tel: /^\d{2,3}-\d{3,4}-\d{4}$/,
  };

  Object.keys(inputs).forEach((type) => {
    inputs[type].addEventListener("input", function () {
      const value = this.value;
      const valid = regex[type].test(value);
      checks[type].textContent = valid
        ? "사용 가능 합니다."
        : "입력 조건이 맞지 않습니다";
      checks[type].style.color = valid ? "blue" : "red";
      updateButton();
    });
  });

  function updateButton() {
    const allValid = Object.keys(checks).every(
      (type) => checks[type].textContent === "사용 가능 합니다."
    );
    button.disabled = !allValid;
    if (allValid) {
      button.classList.add("enabled"); // 버튼에 'enabled' 클래스를 추가하여 스타일 변경
      button.style.cursor = "pointer";
      button.style.backgroundColor = "blue"; // 활성화 상태일 때의 배경 색상
    } else {
      button.classList.remove("enabled"); // 'enabled' 클래스 제거
      button.style.cursor = "not-allowed";
      button.style.backgroundColor = "darkgray"; // 비활성화 상태일 때의 배경 색상
    }
  }
});
