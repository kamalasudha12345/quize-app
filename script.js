const quizData = [
    {
        question: "What does HTML stand for?",
        a: "Home Tool Markup Language",
        b: "Hyperlinks and Text Markup Language",
        c: "Hyper Text Markup Language",
        d: "Hyper Tool Markup Language",
        correct: "c"
    }
];

let currentQuiz = 0;

const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");

function loadQuiz() {
    const currentData = quizData[currentQuiz];
    questionEl.innerText = currentData.question;
    a_text.innerText = currentData.a;
    b_text.innerText = currentData.b;
    c_text.innerText = currentData.c;
    d_text.innerText = currentData.d;
}

loadQuiz();
