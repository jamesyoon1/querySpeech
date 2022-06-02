const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

//str becomes user input
let str = urlParams.get('input');
document.getElementById("input").innerHTML = str;

//new speech object
let speech = new SpeechSynthesisUtterance();
speech.lang = "en";

//get voices
let voices = [];
window.speechSynthesis.onvoiceschanged = () => {
  voices = window.speechSynthesis.getVoices();

  var index = voices.findIndex(voice => voice.name === 'Google US English');

  window.alert(str.concat(index));
  speak(str, index);
};



function speak(input, voiceIndex) {
  speech.voice = voices[voiceIndex];
  speech.text = input;
  window.speechSynthesis.speak(speech);
}
