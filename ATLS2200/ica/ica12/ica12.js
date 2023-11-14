const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getQuote);
const AnswerBtn = document.querySelector('#js-tweet').addEventListener('click', displayAnswer);
let currAnswer;

const endpoint = 'https://trivia.cyberwisp.com/getrandomchristmasquestion';

// async keyword means it will run in perallel with the other Java Script
async function getQuote(){
    console.log('Test');

    try{
        const response = await fetch(endpoint);

        if(!response.ok){
            throw Error(response.statusText);
        }

        const json = await response.json();
        // console.log(json('question'));
        displayQuote(json['question']);
        // displayAnswer(json['answer']);
        currAnswer = json['answer'];

    }catch(err){
        console.log(err);
        alert('Failed to fetch new quote!');
    }
}

function displayQuote(question){
    const questionTxt = document.querySelector('#js-quote-text');   

    questionTxt.textContent = question;
}

function displayAnswer(){
    const answerTxt = document.querySelector('#js-answer-text');

    // answerTxt.textContent = answer;
    answerTxt.textContent = currAnswer;

}

getQuote();