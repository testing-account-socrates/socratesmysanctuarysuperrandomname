const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        }
    });
});

const hiddenElements = document.querySelectorAll(".hidden");
hiddenElements.forEach((el) => observer.observe(el));

window.ontouchstart = window.onclick
window.ontouchend = window.ondblclick
function src_changer(){
    document.getElementById("img3").src = "../imgs/grn_blur_out.jpg";
    }
function src_changer2(){
    document.getElementById("img3").src = "../imgs/grn_blur_in.jpg";
    }
