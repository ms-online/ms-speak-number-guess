// 获得节点
const msgEl = document.getElementById("msg");

const randomNum = getRandomNumber();

console.log("Number", randomNum);

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

let recognition = new window.SpeechRecognition();

recognition.start();
// 创建随机数函数
function getRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// 捕获用户说话的内容
function onSpeak(e) {
  const msg = e.results[0][0].transcript;
  console.log(msg);
}

recognition.addEventListener("result", onSpeak);
