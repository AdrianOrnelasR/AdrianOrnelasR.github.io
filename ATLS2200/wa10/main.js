// 1. COMPLETE VARIABLE AND FUNCTION DEFINITIONS

const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

// 2. RAW TEXT STRINGS

const storyText = "It was 94 fahrenheit outside, so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.";

const insertX = [
    "Mike Tyson",
    "Eric Cartman",
    "frank sinatra"
];

const insertY = [
    "Micro Center",
    "ski diving",
    "a Red Rocks Concert"
];

const insertZ = [
    "commited arson",     
    "to play minecraft hungergames",
    "ran backwards for 90 minutes"
];

// 3. EVENT LISTENER AND PARTIAL FUNCTION DEFINITION

randomize.addEventListener('click', result);

function result() {

  // Create a new variable called newStory
  let newStory = storyText;

  // Create three new variables called xItem, yItem, and zItem, and make them equal to the result of calling randomValueFromArray()
  let xItem = randomValueFromArray(insertX);
  let yItem = randomValueFromArray(insertY);
  let zItem = randomValueFromArray(insertZ);

  // replace the three placeholders in the newStory string — :insertx:, :inserty:, and :insertz:
  newStory = newStory.replace(":insertx:", xItem);
  newStory = newStory.replace(":inserty:", yItem);
  newStory = newStory.replace(":insertz:", zItem);
  newStory = newStory.replace(":insertx:", xItem);

  if(customName.value !== '') {
    const name = customName.value;
    // add another string replacement method call to replace the name 'Bob' found in the newStory string with the name variable
    newStory = newStory.replace("Bob", name);
  }

  // see if the uk radio button has been selected
  if(document.getElementById("uk").checked) {
    const weight = Math.round(300);
    const temperature =  Math.round(94);
    // convert the weight and temperature values in the story from pounds and Fahrenheit into stones and centigrade.
    // replace 94 with a calculation that converts 94 Fahrenheit into centigrade. Concatenate ' centigrade' onto the end of the result of the overall Math.round()
    newStory = newStory.replace("94 fahrenheit", temperature + " centigrade");
    newStory = newStory.replace("300 pounds", weight + " stone");
  }

  // make the textContent property of the story variable (which references the paragraph) equal to newStory
  story.textContent = newStory;
  story.style.visibility = 'visible';
}