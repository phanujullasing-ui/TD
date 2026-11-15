console.log("สวัสดี ร้านผ้า TD");

// นับการ์ดผ้า แล้วเขียนจำนวนบนหัวข้อ
const cards = document.querySelectorAll(".fabric-card");
console.log("มีการ์ดผ้า", cards.length, "ใบ");

const title = document.querySelector(".section-title h2");
title.textContent = "รายการสินค้าแนะนำ (" + cards.length + " รายการ)";

// ไอดี LINE ของร้าน (ถ้าเปลี่ยนไอดี แก้แค่บรรทัดนี้)
const lineId = "@TD3435";

// ใส่ปุ่ม "สนใจผ้านี้" ให้การ์ดทุกใบ
cards.forEach(function (card) {
  const name = card.querySelector("h3").textContent;
  const code = card.querySelector("p").textContent.replace("รหัส:", "").trim();

  const button = document.createElement("button");
  button.className = "btn-interest";
  button.textContent = "💬 สนใจผ้านี้ ทักไลน์";

  button.addEventListener("click", function () {
    // ถ้าชื่อขึ้นต้นด้วย "ผ้า" อยู่แล้ว ไม่ต้องเติมคำว่า "ผ้า" ซ้ำ
    let fabricName = name;
    if (name.startsWith("ผ้า") === false) {
      fabricName = "ผ้า" + name;
    }

    const message = "สวัสดีครับ สนใจ" + fabricName + " รหัส " + code;
    const lineLink = "https://line.me/R/oaMessage/" + lineId + "/?" + encodeURIComponent(message);
    window.open(lineLink, "_blank");
  });

  card.querySelector(".fabric-info").appendChild(button);
});
