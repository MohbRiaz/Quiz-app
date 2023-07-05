
const quizDB = [
    {question: "1.Which was not one of Voldemort's Horcruxes?",
      a:"Harry",
      b:"Nagini",
      c:"Helga's Diadem",
      d:"Tom Riddle's Diary",
      ans: "ans3",
},
    {question: "2.Which of these are not one of Hagrid's many pets?",
    a:"Grawp",
    b:"Fluffy",
    c:"Aragog",
    d:"Noberta",
    ans:"ans1",
},
    {question: 	"3.Which class did Severus Snape always want to teach?",
    a:"Potions",
    b:"Charms",
    c:"Defense Against Dark Arts",
    d:"Transfiguration",
    ans:"ans3",
},
    {question: 	"4.Which Hogwarts house did Moaning Myrtle belong in?",
    a:"Gryffindor",
    b:"Slytherin",
    c:"Ravenclaw",
    d:"Hufflepuff",
    ans:"ans3",
},
    {question:"5.What class did Neville end up teaching at Hogwarts?",
    a:"Astronomy",
    b:"Herbology",
    c:"Charms",
    d:"Muggle Studies",
    ans:"ans2",
},

    
]


const question = document.querySelector('.question');
const option1 = document.querySelector('#option1');
const option2 = document.querySelector('#option2');
const option3 = document.querySelector('#option3');
const option4 = document.querySelector('#option4');
const submit = document.querySelector('#submit');
const answers = document.querySelectorAll('.answer');
const showScore = document.querySelector('#showScore');

let questionCount = 0;
let score = 0;

function loadQuestion(){

const questionList = quizDB[questionCount]

    question.innerText = questionList.question;
    option1.innerText = questionList.a;
    option2.innerText = questionList.b;
    option3.innerText = questionList.c;
    option4.innerText = questionList.d;
}

loadQuestion();

const getCheckAnswer = () => {
    let answer;

    answers.forEach((curAnsElem) =>{
        if(curAnsElem.checked){
            answer = curAnsElem.id
        }
        
    })
    return answer
};

function deselectAll(){
    answers.forEach((curAnsElem) => curAnsElem.checked = false);
}



submit.addEventListener('click', () => {
    const checkedAnswer = getCheckAnswer();
    console.log(checkedAnswer)

    if(checkedAnswer === quizDB[questionCount].ans){
        score++;
    };
    questionCount++;
    deselectAll();

    if(questionCount < quizDB.length){
        loadQuestion();
    } else{
        showScore.innerHTML =`
        <h3> Score  ${score} / ${quizDB.length}</h3>
        <button class = "btn" onclick ="location.reload()></button>"`;

        showScore.classList.remove('scoreArea');
    }
})