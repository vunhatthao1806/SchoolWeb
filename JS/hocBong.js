function finishLoad() {
    const overplay = document.querySelector(".overplay");
    const closeBtns = document.querySelectorAll(".out");
    const shows = document.querySelectorAll(".main-mid__item");
    const show1 = document.querySelector(".form.form1");
    const show2 = document.querySelector(".form.form2");
    const show3 = document.querySelector(".form.form3");
    const gui = document.querySelector(".submitBtn");
    const loginBtnLabel = document.querySelector(
        ".main-top__right-longin_input"
    );
    const username = document.querySelector("input.form-login__id");
    const password = document.querySelector("input.form-login__pw");
    const loginBtn = document.querySelector(".form-login__btn.btn");
    const goToTop = document.querySelector(".go-to__top");
    isLogin = false;

    goToTop.onclick = function () {
        window.scroll(0, 0);
    };

    const userList = [
        {
            username: "admin",
            password: "admin",
        },
        {
            username: "1",
            password: "1",
        },
        {
            username: "Hiền Vy",
            password: "Hiền Vy",
        },
        {
            username: "Hien Vy",
            password: "Hien Vy",
        },
        {
            username: "Thảo",
            password: "Thảo",
        },
    ];

    const scholarshipList = [
        {
            title: "Học bổng doanh nghiệp",
            img: "../hocbong/img/HBDoanhNghiep.png",
        },
        {
            title: "Học bổng KKHT",
            img: "../hocbong/img/HBKHuyenKhichHocTap.jpg",
        },
        {
            title: "Học bổng làm theo lời Bác",
            img: "../hocbong/img/HBLamTheoLoiBac.jpg",
        },
        {
            title: "Học bổng năng lực tiếng Anh",
            img: "../hocbong/img/HBNangLucTiengAnh.jpeg",
        },
        {
            title: "Học bổng nghiên cứu khoa học",
            img: "../hocbong/img/HBNghienCuuKhoaHoc.jpg",
        },
        {
            title: "Học bổng tài năng",
            img: "../hocbong/img/HBTaiNang.jpg",
        },
        {
            title: "Học bổng trao đổi học sinh",
            img: "../hocbong/img/HBTraoDoiHocSinh.jpg",
        },
        {
            title: "Học bổng tuyển sinh",
            img: "../hocbong/img/HBTuyenSinh.jpg",
        },
        {
            title: "Học bổng vượt khó",
            img: "../hocbong/img/HBVuotKho.jpg",
        },
    ];

    //render học bổng
    const htmls = scholarshipList.map((item) => {
        return `
            <div class="form2-item">
              <div class="form2-item__img">
                <img src="${item.img}" alt="">
              </div>
              <div class="form2-item__title">
                ${item.title}
              </div>
            </div>
        `;
    });

    document.querySelector(".form2-list").innerHTML = htmls.join("");

    function closeOverplay() {
        overplay.classList.remove("show");
        show1.classList.remove("show");
        show2.classList.remove("show");
        show3.classList.remove("show");
        document.body.style.overflow = "auto";
    }

    function showLoginForm() {
        document.body.style.overflow = "hidden";
        overplay.classList.add("show");
        show3.classList.add("show");
        show1.classList.remove("show");
        show2.classList.remove("show");
        username.focus();
    }

    shows[2].onclick = function (e) {
        if (!isLogin) {
            //ngăn chặn hành vi mặc định (hành vi mở form thẻ a)
            e.preventDefault();
            showLoginForm();
        }
    };

    loginBtnLabel.onclick = function () {
        if (!isLogin) {
            showLoginForm();
        } else {
            isLogin = false;
            loginBtnLabel.value = "Đăng nhập";
        }
    };

    for (let i = 0; i < shows.length - 1; i++) {
        shows[i].onclick = function () {
            overplay.classList.add("show");
            // show1.classList.add("show");
            if (i == 0) {
                show1.classList.add("show");
                show2.classList.remove("show");
                show3.classList.remove("show");
                document.body.style.overflow = "hidden";
            }
            if (i == 1) {
                show2.classList.add("show");
                show1.classList.remove("show");
                show3.classList.remove("show");
                document.body.style.overflow = "hidden";
            }
        };
    }

    for (let i = 0; i < closeBtns.length; i++) {
        closeBtns[i].onclick = closeOverplay;
    }

    gui.onclick = closeOverplay;

    //login
    loginBtn.onclick = function (e) {
        e.preventDefault();
        const usernameVal = username.value;
        const passwordVal = password.value;

        if (usernameVal && passwordVal) {
            const user = userList.find((item) => item.username == usernameVal);

            if (user) {
                if (user.password == passwordVal) {
                    isLogin = true;
                    username.value = null;
                    password.value = null;
                    closeOverplay();
                    //template string
                    loginBtnLabel.value = `${user.username} - Đăng xuất`;
                } else {
                    alert("Sai mật khẩu!");
                }
            } else {
                alert("Tài khoản không tồn tại!");
            }
        } else {
            alert("Bạn phải nhập đầy đủ thông tin!");
        }
    };
}
