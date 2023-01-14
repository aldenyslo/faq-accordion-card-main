const questions = document.querySelectorAll(".question")

questions.forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;
        const height = answer.scrollHeight;

        question.classList.toggle("active")
        
        // if (question.classList.contains("active")) {
        //     answer.style.paddingTop = "1rem";
        //     answer.style.maxHeight = `${height}px`;
        // } else {
        //     answer.style.paddingTop = "0";
        //     answer.style.maxHeight = "0";
        // }
    })
})