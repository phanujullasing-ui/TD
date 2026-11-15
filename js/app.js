console.log("สวัสดี ร้านผ้า TD");

const cards = document.querySelectorAll(".fabric-card");
console.log("มีการ์ดผ้า", cards.length, "ใบ");

const title = document.querySelector(".section-title h2");
title.textContent = "รายการสินค้าแนะนำ (" + cards.length + " รายการ)";

const interestButton = document.querySelector(".btn-interest");

interestButton.addEventListener("click", function () {
  const message = "สวัสดีครับ สนใจผ้า คอตตอนพรีเมียม รหัส TD-C32-01";
  const lineLink = "https://line.me/R/oaMessage/@TD3435/?" + encodeURIComponent(message);
  window.open(lineLink, "_blank");
});
