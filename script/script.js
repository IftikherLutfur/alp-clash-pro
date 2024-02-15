// function play(){
//     //step-1: Hide the home screen. to hide the screen add the class hidden to the home section.
//     const homeSection = document.getElementById('home-screen');
//     homeSection.classList.add('hidden')
//     // console.log(homeSection.classList)
//     //show the playground
//     const playGround = document.getElementById('play-ground');
//     playGround.classList.remove('hidden');
// }
function handleKeyboardButtonPress(event){
const playerPressed = event.key;
 console.log('User press',playerPressed);

 //stop the game 
 if (playerPressed === 'Escape') {
    gameOver()
 }

 const currentAlphabet = document.getElementById('current');
 const currentElement = currentAlphabet.innerText;
 const expectedAlphabet = currentElement.toLowerCase();
 console.log(playerPressed, expectedAlphabet);

 //checked matched or not:
 if(playerPressed === expectedAlphabet){
    console.log('you got a point');
    // console.log('you have passed correctly', expectedAlphabet);
    
    const currentScore = getTextElementValueById('current-score');
    const updatedScore = currentScore +1;
    setTextElementValueById('current-score', updatedScore);

  //----------------------------//
    //Update score 
    //1.Get the current score
//     const currentScoreElement = document.getElementById('current-score');
//     const currentScoreText = currentScoreElement.innerText;
//     const currentScore = parseInt(currentScoreText)
//     console.log(currentScore); 


//     //2.Increase the score by 1
    // const newScore = currentScore + 1;

// //3.Show the update score:
// currentScoreElement.innerText = newScore;

    //Start a new round
removeBackgroundColorById(expectedAlphabet);
    continueGame();
 }
 else{
    console.log('you missed a life')
    const currentLife = getTextElementValueById('current-life');
    const updatedLLife = currentLife - 1; 
    setTextElementValueById('current-life', updatedLLife);

    if(updatedLLife === 0){
        gameOver()
    }

//--------------------//
    //step-1: get the current life number
// const currentLifeElement = document.getElementById('current-life');
// const currentLifeText = currentLifeElement.innerText;
// const currentLife = parseInt(currentLifeText);
// console.log(currentLife);
//     // step-2: reduce the life count
//       const newLife = currentLife -1;
//     //step-3: display yjr updated life count:
//     currentLifeElement.innerText = newLife;
 }

}
//Capture keyboard key press:
document.addEventListener(
'keyup', handleKeyboardButtonPress
)

function continueGame(){
    //step-1: generate a random alphabet
    const alphabet = getARandomAlphabet();
    // console.log('your random alphabet is',alphabet)

    //set random alphabet to the screen:
    const currentAlphabet = document.getElementById('current');
    currentAlphabet.innerText = alphabet; 

    // setBackgroundColorById 
    setBackgroundColorById(alphabet);
}

function play(){
    //hide everything show only the playground:
    hideElementById('home-screen');
    hideElementById('final-score');
    showElementById('play-ground');
    //reset score and life:
    setTextElementValueById('current-life',5);
    setTextElementValueById('current-score', 0);
    continueGame();
}

function gameOver(){
  hideElementById('play-ground');
  showElementById('final-score');

  //update final score:
  const lastScore = getTextElementValueById('current-score');
  console.log(lastScore);
  setTextElementValueById('total-score', lastScore);

  //clear the last selected alphabet:
    const currentAlphabet = getElementTextById('current');
    // console.log(currentAlphabet)
    removeBackgroundColorById(currentAlphabet);
}
