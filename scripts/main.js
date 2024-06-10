gsap.registerPlugin(ScrollTrigger);

const sections = gsap.utils.toArray(".right-content img");
const dots = gsap.utils.toArray("#progress-circle .dot");

sections.forEach((section, index) => {
    ScrollTrigger.create({
        trigger: section,
        start: "top center",
        end: "top top",
        onEnter: () => changeContent(index),
        onLeaveBack: () => changeContent(index - 1)
    });
});

function changeContent(index) {
    const texts = [
        { h1: "Redefining", h2: "UX Strategy", h3: "and UI design", color: "#2A2E38" },
        { h1: "Developing ERP Solutions", h2: "Furniture Instury", h3: "Best since 2017", color: "#123456" },
    ];

    if (index >= 0 && index < texts.length) {
        document.querySelector(".left-content h1").textContent = texts[index].h1;
        document.querySelector(".left-content h2").textContent = texts[index].h2;
        document.querySelector(".left-content h3").textContent = texts[index].h3;
        document.querySelector(".left-content").style.backgroundColor = texts[index].color;

        sections.forEach((section, i) => {
            section.classList.toggle("active", i === index);
        });

        dots.forEach((dot, i) => {
            dot.classList.toggle("active", i <= index);
        });
    }
}
changeContent(0);
