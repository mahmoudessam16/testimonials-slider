let para = document.querySelector("p");
let job = document.querySelector(".job");
let name = document.querySelector(".name");
let image = document.querySelector(".face-image");
let right = document.querySelector(".right");
let left = document.querySelector(".left");
let one = false;

let tests = [
    {
        name: "Tanya Sinclair",
        job: "UX Engineer",
        para: "“ I’ve been interested in coding for a while but never taken the jump, until now. I couldn’t recommend this course enough. I’m now in the job of my dreams and so excited about the future. ”",
        img: "http://127.0.0.1:5500/images/image-tanya.jpg"
    },
    {
        name: "John Tarkpor",
        job: "Junior Front-end Developer",
        para: "“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”",
        img: "http://127.0.0.1:5500/images/image-john.jpg",
    }
];

right.addEventListener("click", () => {
    condition();
});

left.addEventListener("click", () => {
    condition();
})

function slide(index) {
    image.src = tests[index].img;
    para.textContent = tests[index].para;
    job.textContent = tests[index].job;
    name.textContent = tests[index].name;
}
function condition() {
    if (one) {
        slide(0)
        one = !one;
    } else {
        slide(1);
        one = !one;
    }
}