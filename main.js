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
