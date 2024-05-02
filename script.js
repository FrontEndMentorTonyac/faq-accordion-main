const pHelpMe = document.querySelectorAll(".helpMe")
const pHidden = document.querySelectorAll(".hidden")

pHelpMe.forEach(paragraph => {
    paragraph.addEventListener("click", () => {
        const nextHidden = paragraph.nextElementSibling;
        if (nextHidden && nextHidden.classList.contains('hidden')) {
            nextHidden.classList.toggle("display");
        }
    })
})