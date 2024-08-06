const dataList = [
    {
        title: "Báo cáo chuyên đề định hướng lập trình viên",
        online: "Online",
        time: "18h, ngày 22/2/2022",
        organize: "CLB Tin học Trẻ",
        organizeUser: "Nguyễn Văn A",
        benefit: "Được cộng 5 đrl vào điều - Có kĩ năng mềm",
        note: "Các bạn đăng kí vui lòng tham gia đúng thời gian để chương trình diễn ra tốt đẹp nhất",
        timePost: "5 phút trước",
        img: "../hocbong/img/NKBaoCaoChuyenDeDinhHuongLapTrinhVien.jpg",
        isLike: false,
    },
    {
        title: "Chương trình âm nhạc học đường",
        online: "Offline",
        time: "15h, ngày 25/2/2022",

        organize: "CLB Tin học trẻ",
        organizeUser: "Nguyễn Văn A",
        benefit:
            "Được cộng 5 đrl vào điều - Có kĩ năng mềm - Thưởng thức âm nhạc",
        note: "Các bạn đăng kí vui lòng tham gia đúng thời gian để chương trình diễn ra tốt đẹp nhất",
        timePost: "30 phút trước",
        img: "../hocbong/img/NKChuongTrinhAmNhacHocDuong.jpg",
        isLike: false,
    },
    {
        title: "Cổ vũ đêm chung kết Got Talent",
        online: "Offline",
        time: "18h, ngày 21/2/2022",

        organize: "Trường THPT THảo Vy",
        organizeUser: "Nguyễn Văn A",
        benefit: "Được cộng 5 đrl vào điều",
        note: "Các bạn đăng kí vui lòng tham gia đúng thời gian để chương trình diễn ra tốt đẹp nhất",
        timePost: "1 ngày trước",
        img: "../hocbong/img/NKCoVuDemChungKet.jpg",
        isLike: false,
    },
    {
        title: "Giải pháp phần mềm",
        online: "Offline",
        time: "18h, ngày 20/2/2022",
        organize: "CLB Tin học thiếu niên",
        organizeUser: "Nguyễn Văn A",
        benefit: "Được cộng 5 đrl vào điều",
        note: "Các bạn đăng kí vui lòng tham gia đúng thời gian để chương trình diễn ra tốt đẹp nhất",
        timePost: " 2 ngày trước",
        img: "../hocbong/img/NKGiaiPhapPhanMem24h.jpg",
        isLike: false,
    },
    {
        title: "Hội Thảo chia sẻ tri thức",
        online: "Offline",
        time: "18h, ngày 19/2/2022",

        organize: "CLB Tin học thiếu niên",
        organizeUser: "Nguyễn Văn A",
        benefit: "Được cộng 5 đrl vào điều",
        note: "Các bạn đăng kí vui lòng tham gia đúng thời gian để chương trình diễn ra tốt đẹp nhất",
        timePost: "2 ngày trước",
        img: "../hocbong/img/NKHoiThaoChiaSeTriThuc.jpg",
        isLike: false,
    },
    {
        title: "Kĩ niệm thành lập trường Thảo Vy",
        online: "Offline",
        time: "18h, ngày 18/2/2022",

        organize: "Trường THPT Thảo Vy",
        organizeUser: "Nguyễn Văn A",
        benefit: "Được cộng 5 đrl vào điều",
        note: "Các bạn đăng kí vui lòng tham gia đúng thời gian để chương trình diễn ra tốt đẹp nhất",
        timePost: "3 ngày trước",
        img: "../hocbong/img/NKKiNiemThanhLapTruong.jpg",
        isLike: false,
    },
    {
        title: "Cuộc thi Olympic Tiếng anh toàn quốc",
        online: "Offline",
        time: "18h, ngày 20/2/2022",

        organize: "Trường THPT Thảo Vy",
        organizeUser: "Nguyễn Văn A",
        benefit: "Được cộng 5 đrl vào điều",
        note: "Các bạn đăng kí vui lòng tham gia đúng thời gian để chương trình diễn ra tốt đẹp nhất",
        timePost: "5 ngày trước",
        img: "../hocbong/img/NKOlympicTiengAnhToanQuoc.png",
        isLike: false,
    },
    {
        title: "Trung thu trăng ngọt",
        online: "Offline",
        time: "18h, ngày 20/8/2022",
        organize: "Trường THPT Thảo Vy",
        organizeUser: "Nguyễn Văn A",
        benefit: "Được cộng 5 đrl vào điều",
        note: "Các bạn đăng kí vui lòng tham gia đúng thời gian để chương trình diễn ra tốt đẹp nhất",
        timePost: "5 ngày trước",
        img: "../hocbong/img/NKTrungThuTrangNgot.png",
        isLike: false,
    },
];
const embark = document.querySelector(".embark");
const show = document.querySelector(".story-add");
const inputs = document.querySelectorAll(".item-content > textarea");
const listStory = document.querySelector(".list-story");
const doneBtn = document.querySelector(".done");
const overplay = document.querySelector(".overplay");
const shows = document.querySelectorAll(".item-story_gom");
const form1 = document.querySelector(".form1");
const form2 = document.querySelector(".form2");
const elements = document.querySelectorAll(".form");
const closeBtns = document.querySelectorAll(".out");
const informations = document.querySelectorAll(
    ".information-content__item-drum"
);
const goToTop = document.querySelector(".go-to__top");
// function renderF() {
//     htmlListF = formList.map((data, index) => { return

//     });
// }

// map là thuộc tính của mảng: từ mảng có sẳn lấy dữ liệu từ mảng đó
function render() {
    const htmlList = dataList.map((data, index) => {
        return `
        <li class="item-story" data-index=${index}>
            <div class="item-story_gom">
                <div class="item-story__img">
                    <img src=${data.img} alt="">
                </div>
                <div class="item-story__textm">
                    ${data.title}
                </div>
                <div class="item-story__time">
                    ${data.timePost}
                </div>
            </div>
            <div class="item-story__like ${
                data.isLike ? "liked" : ""
            }" data-index=${index}>
                <i class="fa-solid fa-heart"></i>
            </div>
        </li>
    `;
    });

    const htmls = htmlList.join("");
    listStory.innerHTML = htmls;
}

render();

function closeOverplay() {
    elements[0].classList.remove("show");
    elements[1].classList.remove("show");
    overplay.classList.remove("show");
    console.log(1);
}

show.onclick = function () {
    overplay.classList.add("show");
    elements[1].classList.add("show");
    elements[0].classList.remove("show");
};

function check() {
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value == "") return false;
    }

    return true;
}

doneBtn.onclick = function () {
    console.log(1);
    if (check()) {
        const obj = {
            title: inputs[0].value,
            online: inputs[1].value,
            time: inputs[2].value,
            img: "../hocbong/img/NKTrungThuTrangNgot.png",
            organize: inputs[4].value,
            organizeUser: inputs[5].value,
            benefit: inputs[6].value,
            note: inputs[7].value,
            timePost: "1 phút trước",
        };
        dataList.unshift(obj);
        //xoá dữ liệu sau khi nhập oker
        for (let i = 0; i < inputs.length; i++) inputs[i].value = null;
        render();
        closeOverplay();
    } else alert("Bạn chưa nhập đủ thông tin");
};
// tạo mảng
// onlick tạo {} unshift vào dataList
// học AV
// embark.onclick = function () {
//     closeOverplay;
// }
for (let i = 0; i < closeBtns.length; i++) {
    closeBtns[i].onclick = closeOverplay;
}

//onclick item story
listStory.onclick = function (e) {
    const item = e.target.closest(".item-story");
    const likeBtn = e.target.closest(".item-story__like ");

    if (likeBtn) {
        const d = parseInt(likeBtn.dataset.index);

        if (dataList[d].isLike) {
            dataList[d].isLike = false;
        } else {
            dataList[d].isLike = true;
        }
    } else if (item) {
        const idx = parseInt(item.dataset.index);

        informations[0].innerHTML = dataList[idx].title;
        informations[1].innerHTML = dataList[idx].online;
        informations[2].innerHTML = dataList[idx].time;
        informations[3].innerHTML = dataList[idx].organize;
        informations[4].innerHTML = dataList[idx].organizeUser;
        informations[5].innerHTML = dataList[idx].benefit;
        informations[6].innerHTML = dataList[idx].note;
        console.log(informations[6].innerHTML);
        overplay.classList.add("show");
        form1.classList.add("show");
        form2.classList.remove("show");
    }
    render();
};

goToTop.onclick = function () {
    window.scroll(0, 0);
};
