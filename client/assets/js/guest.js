import { db } from "./firebase.js";

const profileDropdown = document.querySelector("#author-menu-drd");
const userSession = JSON.parse(localStorage.getItem("user_session")) || null;
if (userSession) {
  const now = new Date().getTime();
  if (now < userSession.expiry) {
    profileDropdown.innerHTML = `
                <li class="bg-grey-light logged"><span class="dropdown-item">${userSession.user.providerData[0].email}</span></li>
                <li><a class="dropdown-item logged" href="./order.html">Đơn hàng</a></li>
                <li><a class="dropdown-item logged" href="./balance.html">Ví</a></li>
                <li><button id="logout-btn" class="btn text-danger logged">Đăng xuất</button</li>
            `;
    // Thêm sự kiện click cho nút đăng xuất
    document
      .getElementById("logout-btn")
      .addEventListener("click", function () {
        if (confirm("Bạn có chắc chắn muốn đăng xuất")) {
          firebase
            .auth()
            .signOut()
            .then(() => {
              // Xóa thông tin phiên người dùng khỏi localStorage
              localStorage.removeItem("user_session");
              // Chuyển hướng tới trang đăng nhập
              window.location.href = "/index.html";
            })
            .catch((error) => {
              console.log("Lỗi đăng xuất");
            });
        }
      });
  }
}
