const accordionQuestion = document.querySelectorAll(".accordion-question");
accordionQuestion.forEach((question) => {
        question.addEventListener('click', () => {
            if (question.parentNode.classList.contains('active')) {
                question.parentNode.classList.remove('active');
            } else {
                question.parentNode.classList.add('active');
            }
        })
})