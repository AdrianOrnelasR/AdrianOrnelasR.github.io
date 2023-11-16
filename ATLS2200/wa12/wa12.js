const newBtn = document.querySelector('#js-new-quote').addEventListener('click', getRandomQuote);
const AnswerBtn = document.querySelector('#js-tweet').addEventListener('click', nameCharacter);
const characterSelect = document.querySelector('#char_select');
const characterPlacement = document.querySelector('#characterSize');

let currAnswer;

const endpoint = 'https://southparkquotes.onrender.com/v1/quotes';

// async keyword means it will run in perallel with the other Java Script
async function getRandomQuote(){
    console.log('entered function!');

    try{
        const response = await fetch(endpoint);

        if(!response.ok){
            throw Error(response.statusText);
        }

        const json = await response.json();

        displayQuote(json[0].quote);
        currAnswer = json[0].character;


    }catch(err){
        console.log(err);
        alert('Failed to fetch new quote!');
    }
}

function displayQuote(question){
    const questionTxt = document.querySelector('#js-quote-text');   

    questionTxt.textContent = question;
}

function nameCharacter(){
    const answerTxt = document.querySelector('#js-answer-text');
    // answerTxt.textContent = answer;
    answerTxt.textContent = currAnswer;
    displayCharacter();
}

function displayCharacter(){
    let name = `imgs/${currAnswer}.png`;  
    characterSelect.src = name;
    characterSelect.style.width = '350px';
    characterSelect.style.height = 'auto';
    characterPlacement.style.position = 'fixed';
    characterPlacement.style.bottom = '10px';
    characterPlacement.style.right = '10px';

}

getRandomQuote();