
//All javascript code is in main.html file


// const languageSelect = document.getElementById("languageSelect");
// const startButton = document.getElementById("start");
// const stopButton = document.getElementById("stop");
// const clearButton = document.getElementById("clear");
// const addTextButton = document.getElementById("addText");
// const extraTextArea = document.getElementById("extraText");

// const recognition = new webkitSpeechRecognition();
// recognition.continuous = true;
// recognition.interimResults = true;
// let alltext = "";

// recognition.onstart = function() {
//   document.getElementById("status").style.display = "block";
//   document.getElementById("status").innerHTML = "Listening...";
// };

// recognition.onerror = function(event) {
//   console.error("Speech recognition error:", event.error);
// };

// recognition.onend = function() {
//   document.getElementById("status").innerHTML = "Stopped";
// };

// recognition.onresult = function(event) {
//   let finalTranscript = "";
//   let interimTranscript = "";

//   for (let i = event.resultIndex; i < event.results.length; i++) {
//     const transcript = event.results[i][0].transcript;
//     if (event.results[i].isFinal) {
//       finalTranscript += transcript;
//     } else {
//       interimTranscript += transcript;
//     }
//   }
  
//   document.getElementById("final").innerHTML = finalTranscript;
//   document.getElementById("interim").innerHTML = interimTranscript;
//   alltext = alltext + finalTranscript ;
//   extraTextArea.innerHTML = alltext + "\n";
  
// };

// startButton.onclick = function() {
//   recognition.lang = languageSelect.value;
//   recognition.start();
// };

// stopButton.onclick = function() {
//   recognition.stop();
//   document.getElementById("status").style.display = "none";
// };

// clearButton.onclick = function() {
//   document.getElementById("final").innerHTML = "";
//   document.getElementById("interim").innerHTML = "";
//    extraTextArea.value = finalTranscript + " " + interimTranscript;
// };

// addTextButton.onclick = function() {
//   const text = extraTextArea.value;
//   if (text !== "") {
//     document.getElementById("final").innerHTML += " " + text;
//     extraTextArea.value = "";
//   }
// };
