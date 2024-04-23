function buy_tobe(item, price, quantity, callback) {
  console.log(item + " 상품을 " + quantity + "개 골라서 점원에게 주었습니다.");
  setTimeout(function () {
      console.log("계산이 필요합니다.");
      var total = price * quantity;
      callback(total);
  }, 2000);
}
function pay(n) {
  console.log("지불 할 금액은 : " + n + "입니다.");
}

// buy_tobe("\'밤고구마 맛없음\'", 1000, 5, pay);

let button = document.querySelector('#myButton');
button.addEventListener('click', function() {
  console.log("전송버튼이 눌러졌습니다");
  console.log("내가 쓴글이 전송 되었습니다.");
}); 

