const quizData = [
    {
        question: "How old is me?",
        a: '10',
        b: '17',
        c: '26',
        d: '34',
        correct: 'c'
    },
    {
        question: 'What is the most used programming language in 2019?',
        a: 'Java',
        b: 'C',
        c: 'Python',
        d: 'JavaScript',
        correct: 'a'
    },
    {
        question: 'Who is the President of US?',
        a: 'a',
        b: 'b',
        c: 'c',
        d: 'd',
        correct: 'b'
    },
    {
        question: 'What does HTML stand for?',
        a: 'Hypertext Markup Language',
        b: 'Cascading Style Sheet',
        c: 'Jason Object Notation',
        d: 'Hlicopertes Terminals Motorboats Lamborginis',
        correct: 'a'
    },
    {
        question: 'What year was JavaScript launched?',
        a: '2020',
        b: '2019',
        c: '1996',
        d: '1995',
        correct: 'd'
    }
];

let currentQuiz = 0;
let score = 0;
let answer = undefined;
const questionEl = document.getElementById("question");
const quiz = document.getElementById("quiz");
const answersEls = document.querySelectorAll(".answer");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

loadQuiz();


function loadQuiz(){
    deselectAnswers();
    const currentQuizData = quizData[currentQuiz];
    questionEl.innerHTML = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected(){
    const answersEls = document.querySelectorAll(".answer");
    var answer = undefined;

    answersEls.forEach((answerEl) => {
        if(answerEl.checked){
            answer = answerEl.id;
            console.log(answerEl.id);
            return answer;
        }
    });

    return answer;

}

function deselectAnswers(){
    answersEls.forEach((answersEl) => {
        answersEl.checked = false;
    })
}



submitBtn.addEventListener('click', () => {

    const answer = getSelected();
    if(answer){
        if(answer === quizData[currentQuiz].correct){
            score++;
        }
        currentQuiz++;
        if(currentQuiz < quizData.length){
            loadQuiz();
        }else{
            // show result
            //alert("you finished");
            quiz.innerHTML = `<h2>You answered correctly ${score}/${quizData.length} questions. </h2> <button onclick="location.reload()">Reload</button>`;
        }
    }

})