console.log("สวัสดี ร้านผ้า TD");

const cards = document.querySelectorAll(".fabric-card");
console.log("มีการ์ดผ้า", cards.length, "ใบ");

const title = document.querySelector(".section-title h2");
title.textContent = "รายการสินค้าแนะนำ (" + cards.length + " รายการ)";
