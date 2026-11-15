console.log("สวัสดี ร้านผ้า TD");

// ไอดี LINE ของร้าน (ถ้าเปลี่ยนไอดี แก้แค่บรรทัดนี้)
const lineId = "@TD3435";

// กล่องที่จะใส่การ์ดผ้าทั้งหมด
const grid = document.querySelector(".catalogue-grid");

// สร้างการ์ด 1 ใบ ต่อผ้า 1 ชนิดใน fabrics.js
fabrics.forEach(function (fabric) {
  const card = document.createElement("div");
  card.className = "fabric-card";

  card.innerHTML = `
    <div class="fabric-thumb">${fabric.thumb}</div>
    <div class="fabric-info">
      <h3>${fabric.name}</h3>
      <p>รหัส: ${fabric.code}</p>
      <span class="tag-price">${fabric.note}</span>
    </div>
  `;

  // ปุ่ม "สนใจผ้านี้"
  const button = document.createElement("button");
  button.className = "btn-interest";
  button.textContent = "💬 สนใจผ้านี้ ทักไลน์";

  button.addEventListener("click", function () {
    // ถ้าชื่อขึ้นต้นด้วย "ผ้า" อยู่แล้ว ไม่ต้องเติมคำว่า "ผ้า" ซ้ำ
    let fabricName = fabric.name;
    if (fabric.name.startsWith("ผ้า") === false) {
      fabricName = "ผ้า" + fabric.name;
    }

    const message = "สวัสดีครับ สนใจ" + fabricName + " รหัส " + fabric.code;
    const lineLink = "https://line.me/R/oaMessage/" + lineId + "/?" + encodeURIComponent(message);
    window.open(lineLink, "_blank");
  });

  card.querySelector(".fabric-info").appendChild(button);
  grid.appendChild(card);
});

// นับจำนวนผ้า แล้วเขียนบนหัวข้อ
const title = document.querySelector(".section-title h2");
title.textContent = "รายการสินค้าแนะนำ (" + fabrics.length + " รายการ)";
console.log("มีผ้า", fabrics.length, "ชนิด");
