// const { MongoClient } = require('mongodb');
// const axios = require('axios');
// const client = new MongoClient('mongodb://localhost:27017');
// const db = client.db('birds');
// const collection = db.collection('documents');

const minutesBtn = document.querySelector("#chooseMin");
const timerBtn = document.querySelector("#timer");
const timerDisplay = document.querySelector('#timerDisplay');
const paustimerDisplayrBtn = document.querySelector("#paustimerDisplayr");
const resetTimerBtn = document.querySelector("#resetTimer");
const toggleSoundBtn = document.querySelector("#toggleSound");
const taskContainer = document.querySelector(".taskContainer");

const nightlight = document.querySelector("#nightlight");
const container = document.querySelector(".container");
let mode = "light";

// Start with front end (user interface), get elements I want rendered
// Then populate with data
// Don't worry about handlebars. Keep it as simple as possible
// Point is to get familiar with serverless and implement it on a project

// -------------------------------- Choose Time Function --------------------------------

const chooseMinutes = () => {
  minutesBtn.onclick = function() {
    const userNo = document.querySelector("#inputNo").value;
    console.log(`userNo: ${userNo}`);
    startTimer(userNo, timerDisplay);
  };
};
minutesBtn.addEventListener("click", chooseMinutes());

// -------------------------------- Pause Timer --------------------------------

const paustimerDisplayr = () => {
  //
};
paustimerDisplayrBtn.addEventListener("click", paustimerDisplayr());

// -------------------------------- Reset Timer --------------------------------

const resetTimer = () => {
  clearInterval(timerBtn);
};
resetTimerBtn.addEventListener("click", resetTimer());

// -------------------------------- Toggle Sound --------------------------------

const toggleSound = () => {
  //
};
toggleSoundBtn.addEventListener("click", toggleSound());

// -------------------------------- Light/Dark Mode --------------------------------

nightlight.addEventListener("click", function() {
  if (mode === "dark") {
    mode = "light";
    // container.setAttribute("class", "light");
    console.log("Morning already?")
  }
  else {
    mode = "dark";
    // container.setAttribute("class", "dark");
    console.log("Nighty night!")
  }
});

// -------------------------------- Timer Function --------------------------------

function startTimer(duration, display) {
  // if (timerBtn.paused){    
  //   timerBtn.play();
  //   console.log("Timer start!")
  // } else {
  //   timerBtn.pause("Timer end!");
  // }

  let timer = duration, minutes, seconds;
  setInterval(function () {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    console.log("Tick");

    if (--timer < 0) {
        timer = duration;
        console.log("Time's up!");
        // playSound();
        // clearInterval(intervalEl);
    };
  }, 1000);
};

// -------------------------------- Random Qoute Generator --------------------------------

const randomQuoteArr = [
  'In the evening, write down the most important things you need to do the next day.',
  'Don\'t write down so much that you overwhelm yourself.',
  'Focus on process, not product.',
  'Recall is one of the most effective learning methods.',
  '"Eat your frogs first." Do the most unpleasant tasks first so they\'re out of the way.',
  'Time is not an enemy. When handled correctly, it can even be turned into an ally.',
  'Knowing when to take breaks is just as important as the work itself!',
  'Flash cards are cheap and effective ways to drill yourself on smaller concepts.'
];

const randomQuoteGenerator = () => {
  const randomNo = Math.floor(Math.random() * (randomQuoteArr.length));
  document.querySelector('#randomTip').innerHTML = randomQuoteArr[randomNo];
};

// -------------------------------- Task Generator --------------------------------

const taskListGenerator = () => {
  for (let i = 0; i < 10; i++){
      const itemEl = document.createElement("div");
      // const hourEl = document.createElement("div");
      const textAreaEl = document.createElement("textarea");
      const addItemminutesBtn = document.createElement("button");

      // hourEl.textContent = i + ":00";
      addItemminutesBtn.innerText = "Add";

      itemEl.setAttribute("id", "hour-", + i);
      itemEl.classList.add("row", "time-block")
      // hourEl.classList.add("col-sm-12", "hour");
      textAreaEl.classList.add("col-sm-11", "description");
      textAreaEl.setAttribute("id", "Dynamically Generated ID")
      addItemminutesBtn.classList.add("col-sm-1", "minutesBtn", "addItemminutesBtn");

      // if (i < currentTimeEl){
      //     itemEl.classList.add("past");
      // } else if (i === currentTimeEl){
      //     itemEl.classList.add("present");
      // } else {
      //     itemEl.classList.add("future");
      // };

      taskContainer.appendChild(itemEl);
      // itemEl.appendChild(hourEl);
      itemEl.appendChild(textAreaEl);
      itemEl.appendChild(addItemminutesBtn);
  };
};

randomQuoteGenerator();
taskListGenerator();

// -------------------------------- Stopwatch --------------------------------

{/* <div id="stopwatch">
  <!-- CURRENT TIME -->
  <div id="sw-time">00:00:00</div>
 
  <!-- CONTROLS -->
  <input type="button" value="Reset" id="sw-rst" disabled/>
  <input type="button" value="Start" id="sw-go" disabled/>
</div> */}

const startStop = {
  // (A) INITIALIZE
  timerShow: null, // HTML time display
  timerReset: null, // HTML reset button
  timerBegin: null, // HTML start/stop button
  init: function () {
    // (A1) GET HTML ELEMENTS
    startStop.timerShow = document.getElementById("startStop-show");
    startStop.timerReset = document.getElementById("startStop-reset");
    startStop.timerBegin = document.getElementById("startStop-begin");

    // (A2) ENABLE BUTTON CONTROLS
    startStop.timerReset.addEventListener("click", startStop.reset);
    startStop.timerReset.disabled = false;
    startStop.timerBegin.addEventListener("click", startStop.start);
    startStop.timerBegin.disabled = false;
  },

  // (B) TIMER ACTION
  timer: null, // timer object
  now: 0, // current elapsed time
  tick: function () {
    // (B1) CALCULATE HOURS, MINS, SECONDS
    startStop.now++;
    const remain = startStop.now;
    const hours = Math.floor(remain / 3600);
    remain -= hours * 3600;
    const mins = Math.floor(remain / 60);
    remain -= mins * 60;
    const secs = remain;

    // (B2) UPDATE THE DISPLAY TIMER
    if (hours < 10) { hours = "0" + hours; };
    if (mins < 10) { mins = "0" + mins; };
    if (secs < 10) { secs = "0" + secs; };
    startStop.timerShow.innerHTML = hours + ":" + mins + ":" + secs;
  },
  
  // (C) START!
  start: function () {
    startStop.timer = setInterval(startStop.tick, 1000);
    startStop.timerBegin.value = "Stop";
    startStop.timerBegin.removeEventListener("click", startStop.start);
    startStop.timerBegin.addEventListener("click", startStop.stop);
  },

  // (D) STOP
  stop: function () {
    clearInterval(startStop.timer);
    startStop.timer = null;
    startStop.timerBegin.value = "Start";
    startStop.timerBegin.removeEventListener("click", startStop.stop);
    startStop.timerBegin.addEventListener("click", startStop.start);
  },

  // (E) RESET
  reset: function () {
    if (startStop.timer != null){ 
      startStop.stop(); 
    };
    startStop.now = -1;
    startStop.tick();
  }
};
window.addEventListener("load", startStop.init);

// ----------------------------------------------------------------

// const getBirds = (collection) => collection.find({}).toArray();

// const addBird = async (collection) => {
//   const result = await collection.insertMany([
//     { name: 1 },
//     { name: 2 },
//     { name: 3 },
//   ]);
//   console.log(result);
//   return collection;
// };

// app.get('/', async function (req, res) {
//   const birds = await getBirds(collection);
//   res.json(birds);
// });

// client.connect().then(() => app.listen(3000));

// ----------------------------------------------------------------

// window.onload = function () {
//   const time = 60 / 2, // your time in seconds here
//       display = document.querySelector('#timerDisplay');
//   startTimer(time, display);
// };

// const sessionTimer = () => {
//   const sec = 30;
//   const timer = setInterval(function(){
//       document.getElementById('timerDisplay').innerHTML='00:'+sec;
//       sec--;
//       if (sec < 0) {
//           clearInterval(timer);
//       };
//   }, 1000);
// };

// function startTimer(duration, display) {
//   const timer = duration, minutes, seconds;
//   document.getElementById('timerDisplay').innerHTML = '00:' + sec;
//   setInterval(function () {
//       minutes = parseInt(timer / 60, 10)
//       seconds = parseInt(timer % 60, 10);

//       minutes = minutes < 10 ? "0" + minutes : minutes;
//       seconds = seconds < 10 ? "0" + seconds : seconds;

//       display.textContent = minutes + ":" + seconds;

//       if (--timer < 0) {
//           timer = 0;
//           // timer = duration; // uncomment this line to reset timer automatically after reaching 0
//       }
//   }, 1000);
// }