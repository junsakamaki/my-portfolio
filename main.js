const text = [
  "W",
  "E",
  "L",
  "C",
  "O",
  "M",
  "E",
  " ",
  "T",
  "O",
  " ",
  "M",
  "Y",
  " ",
  "S",
  "I",
  "T",
  "E",
  "!",
];
const title = document.getElementById("title");
let j = 0;
const opening = function () {
  if (j < text.length) {
    title.textContent += text[j];
    j += 1;
  }
};
setTimeout(function () {
  setInterval(opening, 100);
}, 2000);

/* 写真表示切り替え */
const pictures = document.getElementById("pictures");
const pic = ["Jun1.jpg", "Jun2.jpg", "Jun3.jpg", "Jun4.jpg"];
const img_element = document.createElement("img");

let i = 0;
const changePic = function () {
  pictures.src = pic[i];
  i += 1;
  if (i === pic.length) {
    i = 0;
  }
};
setInterval(changePic, 4000); /* 4秒ごとに繰り返す */
changePic();

const li1 = document.getElementById("li1");
let one = 0;
li1.onclick = function () {
  if (one % 2 === 0) {
    li1.innerHTML = "さかまきじゅん";
  } else {
    li1.innerHTML = "名前<br /><span>坂巻潤</span>";
  }
  one += 1;
};
const li2 = document.getElementById("li2");
let two = 0;
li2.onclick = function () {
  if (two % 2 === 0) {
    li2.innerHTML = "今まで「潤子」って呼ばれていたのでそちらでもOK!";
  } else {
    li2.innerHTML = "あだ名<br /><span>じゅん</span>";
  }
  two += 1;
};
const li3 = document.getElementById("li3");
let three = 0;
li3.onclick = function () {
  if (three % 2 === 0) {
    li3.innerHTML = "数学入試3時間！<br />キツかった！";
  } else {
    li3.innerHTML = "大学<br /><span>東京工業大学</span>";
  }
  three += 1;
};
const li4 = document.getElementById("li4");
let four = 0;
li4.onclick = function () {
  if (four % 2 === 0) {
    li4.innerHTML = "本当は情報系行きたかったけど、成績悪くて行けず😢";
  } else {
    li4.innerHTML = "学科<br /><span>電気電子系</span>";
  }
  four += 1;
};
const li5 = document.getElementById("li5");
let five = 0;
li5.onclick = function () {
  if (five % 2 === 0) {
    li5.innerHTML = "就活真っ最中！<br />しんどい！";
  } else {
    li5.innerHTML = "学年<br /><span>修士１年</span>";
  }
  five += 1;
};
const li6 = document.getElementById("li6");
let six = 0;
li6.onclick = function () {
  if (six % 2 === 0) {
    li6.innerHTML = "埼玉の唯一の魅力：<br />東京に近い";
  } else {
    li6.innerHTML = "出身<br /><span>埼玉県</span>";
  }
  six += 1;
};
const li7 = document.getElementById("li7");
let seven = 0;
li7.onclick = function () {
  if (seven % 2 === 0) {
    li7.innerHTML = "ロングスリーパーで困っています。";
  } else {
    li7.innerHTML = "好きなこと<br /><span>睡眠💤</span>";
  }
  seven += 1;
};
const hide1 = document.getElementById("hide1");
hide1.onclick = function () {
  hide1.innerHTML = "やあ！";
};
const hide2 = document.getElementById("hide2");
hide2.onclick = function () {
  hide2.innerHTML = "Hi!";
};
