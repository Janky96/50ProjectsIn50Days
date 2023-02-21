const eventKey = document.querySelector("#eventKey");
const eventKeyCode = document.querySelector("#eventKeyCode");
const eventCode = document.querySelector("#eventCode");

window.addEventListener("keydown", (e) => {
  console.log(e);
  eventKey.innerHTML = e.key;
  eventKeyCode.innerHTML = e.keyCode;
  eventCode.innerHTML = e.code;
});
