function init(){
let s = document.getElementById("search");
    s.addEventListener("change", function(){
        let subjects = document.querySelectorAll(".subject a ");
        for (let s of subjects)
            if (s.innerText.indexOf(this.value) >= 0) {
                s.parentElement.classList.remove("search-ani");
                setTimeout(function() {
                    s.parentElement.classList.add("search-ani");
                }, 100);
            }
    });
}