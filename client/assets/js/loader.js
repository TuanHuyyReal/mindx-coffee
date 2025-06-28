const loader = document.querySelector(".loader");

window.onload = () => {
  // Ẩn loader sau khi trang đã tải xong
  loader.style.display = "none";
};
window.addEventListener("load", () => {
  // Hiển thị loader khi trang bắt đầu tải
  loader.style.display = "block";

  // Thực hiện các tác vụ khác nếu cần
  setTimeout(() => {
    // Giả lập thời gian tải dữ liệu
    loader.style.display = "none"; // Ẩn loader sau khi hoàn thành
  }, 2000); // Thời gian giả lập là 2 giây
});
