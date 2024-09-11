import React from "react";
import "./ZaloLogo.css"; // Nhập file CSS

const ZaloLogo = () => {
  return (
    <a
      href="https://zalo.me/0902583722" // Thay "your-zalo-id" bằng ID Zalo của bạn
      target="_blank"
      rel="noopener noreferrer"
    >
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7o9w5nKE-Scl6VfHWM3lp5dieoPClpxQBQ&s"
        alt="Logo Zalo"
        className="zalo-logo"
      />
      0902583722
    </a>
  );
};

export default ZaloLogo;
